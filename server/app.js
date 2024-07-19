const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback()),
	  //server = require('http').createServer(app.callback()),
	  io   = require('socket.io')(server);
const serve = require('koa-static');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const Battles = require('./db/models/battles');
const Users = require('./db/models/users');
const Router = require('koa-router');
const router = new Router();
const dbSetup = require('./db/db-setup');
const session = require('koa-session');


app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa.sess', 
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true, 
  httpOnly: true, 
  signed: true, 
  rolling: false,
  renew: false, 
  secure: false, 
  sameSite: null, 
};

app.use(cors());
app.use(session(CONFIG, app));

let clients = 0;
let connection = [];

router.get('/all/users', async (ctx) => {
	const users = await Users.query();
	ctx.body = JSON.stringify(users, null, 2);
})

router.post('/all/battles', async (ctx) => {
	try{
		let {id, user_1, user_2, status} = ctx.request.body;
		let battle = await Battles.query().findOne({
			user_1: user_1,
			user_2: "unknown"
		});
		if(!battle){
			let newBattle = await Battles.query().insert({id, user_1, user_2, status}).returning('id');
			ctx.session.battle = newBattle;
			ctx.body = newBattle;
		}else{
			console.log('here')
			ctx.session.battle = battle;
			ctx.body = battle;
		}
	}catch(err){
		ctx.body = err.message;
	}
})

router.get('/all/battles/:id', async (ctx) => {
	let i_d = ctx.params.id;
	let battleFind = await Battles.query().findById(i_d);
	ctx.body = battleFind;
})

router.put('/all/battles/:id', async (ctx) => {
	let i_d = ctx.params.id;
	let {id, user_1, user_2, status} = ctx.request.body;
	let battleUpdated = await Battles.query().findById(i_d).update({id, user_1, user_2, status});
	let battle = await Battles.query().findById(i_d);
	ctx.session.battle = battle;
	ctx.body = 'the battle is updated';
})

router.get('/presentBattleUpdated', async (ctx) => {
	ctx.body = ctx.session.battleUpdated || 'hello2';
})

router.get('/presentBattle', async (ctx) => {
	ctx.body = ctx.session.battle;
})

router.get('/all/battles', async (ctx) => {
	const battles = await Battles.query();
	ctx.body = JSON.stringify(battles, null, 2);
})

router.get('/all/battles_in_process', async (ctx) => {
	const battles = await Battles.query(); //.orderBy([{column:"user_2",order:"unknown"}]);
	let unknownBattles = battles.filter(item => item.user_2==='unknown');
	ctx.body = JSON.stringify(unknownBattles, null, 2);
})


router.get('/auth/me',async (ctx) => {
	ctx.body = ctx.session["user"] || {};
})

router.get('/auth/me/login', async (ctx) => {
	ctx.body = ctx.session["login"] || {};
})

router.post('/chooseUser', async (ctx) => {
	let {login, password} = ctx.request.body;
	try{
		let user= await Users.query().findOne({
			login: login,
			password: password
		});
		console.log(user);
		if(user === undefined){
			ctx.session.user = {message:"Логин или пароль не верен", statusCode: 401};
			ctx.body = "Логин или пароль не верен";
		}else{
				//ctx.session.login = user;
			ctx.session.user = user;
			ctx.body = user;
		}	
	}catch(err){
		ctx.session.user = {message: "Логин или пароль не верен", statusCode: 401};
		ctx.body = err;
	}
})

router.delete('/all/users/:id', async (ctx) => {
	const id = ctx.params.id;
	let user = await Users.query().findById(id).del();
	ctx.body = 'the user is deleted';
});

router.post('/all/users', async (ctx, next) => {
	try{
		let {id, login, password} = ctx.request.body;
		let newUser = await Users.query().insert({id, login, password}).returning('id');
		ctx.session.user = newUser;
		ctx.body = newUser;
	}catch(err){
		console.log("error", err);
		ctx.session.user = {message: "Выберите другой логин", statusCode: 401};
		ctx.body = err.message;
	}
	
});

router.get('/clients', async (ctx) => {
	ctx.body = clients;
})

router.get('/all/online',async (ctx) => {
	ctx.body = JSON.stringify(connection, null, 2);// + " => " +connection.length;
})


app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());


dbSetup();

app.use(async (ctx, next) => {
	ctx.body = 'hello';
});

let id_is = [];

io.on('connection', (socket) => {
	clients++;
	console.log(`a user is connected ${socket.id}: ${clients}`)	

	id_is.push(socket.id);

	socket.on('throw', (user) => {
		let user2 = connection.find(item => item.logIn === user.login);
		if(!user2){
			connection.push({
				logIn: user.login,
				userId: user.id, 
				sockId: socket.id
			});
		}else{
			user2['sockId'] = socket.id;
		}
	})


	socket.once('disconnect', () => {
		clients--;
		let user = connection.find(item => item.sockId === socket.id);
		console.log(`a user is disconnected ${socket.id}: ${clients}`)
		connection.splice(connection.indexOf(user),1);
		console.log(connection);
	})
})



server.listen(4000, '127.0.0.1', () => {
	console.log('server is ready on 4000 port');
});