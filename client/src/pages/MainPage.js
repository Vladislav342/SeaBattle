import React, {useEffect, useRef, useState}  from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Main.css';


const Main = () => {
	let setLocal = () => {
		localStorage.setItem('authCode', undefined);
		localStorage.setItem('authLogin', undefined);
	}

	return (
		<div className='backGround'>
			<div className="loginForm">	
				<Link className='link' to="/login" onClick={setLocal}>Log in</Link>
				<span>/</span>
				<Link className='link' to="/registration" onClick={setLocal}>Registration</Link>
				<p>Please registr or log in </p>
			</div>
			<div>
				
			</div>
		</div>
	)
}

export default Main;