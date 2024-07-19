import React, {useEffect, useRef, useState}  from 'react';
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from 'axios';

const Log = ({something}) => {
	let [name, setName] = useState('');
	let [pass, setPass] = useState('');
	let [count, setCount] = useState(0);
	let [sec, setSec] = useState(1);

	let navigate = useNavigate();

	if(localStorage.authCode !== undefined){
		localStorage.setItem('authCode', undefined);
		localStorage.setItem('authLogin', undefined);
	}

	useEffect(() => {
		if(sec === 0){
			if(something?.message === "Логин или пароль не верен" && count === 0){
				alert(something.message);
				setCount(1);
			}
			return;
		};
		const interval = setInterval(() => {
			setSec(sec=>sec-1);
		},1000)
		return () => { 
				clearInterval(interval);
	    }
	}, [sec]);

	let sendMessage = async () => {
		await axios.post('/chooseUser', {
			login: name,
			password: pass
		})
		navigate("/profile")
	}

	return (
		<div className="center">
            <div className="form">
                <input value={name} style={{backgroundColor: name.length>0 ? 'green' : 'red'}}  onChange={e => setName(e.target.value)} type="text" placeholder="login"/>
                <input value={pass} style={{backgroundColor: pass.length>0 ? 'green' : 'red'}}  onChange={e => setPass(e.target.value)} placeholder='password'/>
                <button className="link" onClick={() => { sendMessage();}}  disabled={(name.length!==0 && pass.length!==0)?false:true}>Log In</button>
                <Link className="link" to="/registration">Registration</Link>
            </div>
        </div>
	)
}

//export default Log;

const CLog = connect((state) => ({something: state?.auth}))(Log);
export default  CLog;
