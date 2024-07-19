import React, {useEffect, useRef, useState} from "react";
import { Navigate } from "react-router-dom";
import { Link} from "react-router-dom";
import axios from "axios";




let ProfileRendering = (props) => {
	let sendMessage = async () => {
		await axios.post('/all/battles', {
			user_1: props.login,
			user_2: 'unknown',
			status: "in_process"
		})
	}

	
	return (
		<div>
			<h1>Your nick:<span>{props?.login ?  props.login : "ERROR"}</span></h1>
			<Link className='link' to="/registration" onClick={() => props.onLogout()}>Log out</Link>
			<Link className='link' to="/lobby"  onClick={sendMessage}>Create a battle</Link>
			<Link className='link' to="/battles" >Join a game</Link>
			<button onClick={()=>console.log(props)}>Click here</button>
		</div>
	);	
}



export default ProfileRendering;