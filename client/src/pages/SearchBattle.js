import React, {useEffect, useRef, useState} from "react";
import { Navigate } from "react-router-dom";
import { Link} from "react-router-dom";
import axios from 'axios';


const ForBattles = ({id=0, user_1='', user_2='', status=''}) => {
	let [user, setUser] = useState(null);

	useState(()=>{
		console.log(localStorage.getItem('authLogin'));
		setUser(localStorage.getItem('authLogin'));
	},[])

	
	let show = async () => {
		//console.log(id, user_1, user_2);
		await axios.put(`/all/battles/${id}`, {
				id: id,
				user_1: user_1,
				user_2: user,
				status: status
		    })
	}

	return(
		<div className='tableBattlesConnect'>
			<tr>
			    <td>{id}</td>
			    <td>{user_1}</td>
			    <td>{user_2}</td>
			    <td>{status}</td>
			    <td><Link to="/lobby" className='link2' onClick={show}>Connect</Link></td>
		  	</tr>
	  	</div>
	)	 
}

const Battles = () => {
	let [battles, setBattles] = useState(null);

	

	useEffect(() => {
		axios.get('/all/battles_in_process')
			.then(response => {
				setBattles(response.data);
			})		
	}, []);

	if(!battles) return "Please wait ...";

	return (
		<>
			<Link className="link" to="/profile">Back</Link>
			{battles.map(item => <ForBattles key={item.id} {...item} />)}
		</>
	)
}

export default Battles;