import React                                    from "react";
import {Redirect}                       from "react-router-dom";
import {useEffect, useState, useRef}            from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from "./privateRouter";
import Home from './Home';
import Auth from './pages/Auth';


const LoginForm = ({onLogin}) =>{
    const [login, setLogin] = useState(''); //braunvlad4
    const [pass, setPass] = useState('');   //123
    return( 
        <div className='LoginForm'>
            <input value={login} 
                   style={{backgroundColor: login.length>0 ? 'green' : 'red'}} 
                   placeholder='your login' 
                   onChange={e=>setLogin(e.target.value)} />
            <input value={pass} 
                   style={{backgroundColor: pass.length>0 ? 'green' : 'red'}} 
                   placeholder='your pass' 
                   onChange={e=>setPass(e.target.value)} />
            <button onClick={()=>onLogin(login,pass)} 
                    disabled={(login.length!==0 && pass.length!==0)?false:true }>
                Send
            </button>
        </div>
    )
}

const Routes = () => {
    return (
        <div className="App">
            <div className="contentDiv">
                <Switch>
                    <PrivateRoute exact path='/' roles={['user']} component={Home} />
                    <PrivateRoute  path="/login" roles={['unknown']} component={Auth} />
                </Switch>
            </div>
        </div>
    );
};

export default Routes
