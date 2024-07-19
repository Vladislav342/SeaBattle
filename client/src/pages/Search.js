import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';


const Test = ({id=0, login='*****'}) => {
	return(
		<p key = {id}>{id} : {login}</p>
	)
}

const Test2 = ({arr, id=1}) => {
	let obj = arr.find(x => x.id === Number(id));
	return id===undefined||obj===undefined ? 'Такого пользователя не существует' : <h1>{obj.id} : {obj.login}</h1>;
} 

const Search = () => {
	const [arr, setArr] = useState([]);
	const [open, setOpen] = useState(false);
	const [id, setId] = useState('');
	const [open2, setOpen2] = useState(false);


	const getUsers = async () => {
		return await axios.get('http://localhost:4000/all/users')
	}

	const users = getUsers().then(item=> item.data.map(item2=>{ return item2}));


	return(
		<>
			<button onClick={()=>{getUsers().then(item=> setArr(item.data)); setOpen(true);}}>Show Users</button>
			<button onClick={()=> {console.log(arr); console.log(open)}}>Console</button>
			<input value={id} onChange={e => setId(e.target.value)}/>
			<button onClick={()=> {setOpen(false); setOpen2(true);}}>Search</button>
			<h1>{open===true ? <span>{arr.map(item => <Test {...item} /> )}</span> : ' ' }</h1>
			<h1>{open2 === true ? <span>{<Test2 arr={arr} id={id}/>}</span> : ' ' }</h1>
		</>
	)
}

export default Search;