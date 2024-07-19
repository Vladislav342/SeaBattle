import React, {useEffect, useRef, useState} from "react";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import { io } from "socket.io-client";


const Timer = ({startSec, c}) => {
    const [sec, setSec] = useState(startSec);
    const [min,setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [count, setCount] = useState(c);
    const [message, setMessage] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        	if(sec === 0){
                navigate("/profile");
                return;
            } 
            const interval = setInterval(() => {
            	setSec(sec => sec - 1)
        	}, 1000)
        	return () => { 
        		 clearInterval(interval)	
        	}
    }, [sec])
    return (
           <p>{new Date(new Date().setHours(hour, min, sec)).toLocaleString().split (", ")[1]}</p>
    )
}

let Create = ({user}) => {
    console.log(user);
    //здесь должен заходить логин из редакса
	const [timers, setTimers] = useState([]);
    const [count, setCount] = useState(0);     
    let [m, setM] = useState(0);
    let [s, setS] = useState(120);
    const [id, setId] = useState(null);

    const [WebSockId, setWebSockId] = useState('')

    const [user1, setUser1] = useState('unknown');
    const [user2, setUser2] = useState('unknown');

    const [online, setOnline] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('/presentBattle', {withCredentials: true})
            .then(response => {
                console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddddddddddddddddddddddddddddddddddddddddddd');
                console.log(response.data.id);
                setId(response.data.id);
            })  
    }, []);

    useEffect(()=>{
        const socket = io();
        socket.once('connect', () => { 
            console.log('socket');
            console.log(socket);
            setWebSockId(socket.id);
        });

        socket.emit('throw', user);

        socket.once('disconnect', () => {
            console.log('socket is disconnected');
        })
    }, []);


    let res = (m * 60) + +s;
    useEffect(()=>{
        setTimers([Math.random(), ...timers]);
    }, []);


    

   
    useEffect(()=>{
        if(user2 !== 'unknown') return;
        let interval = setInterval(()=>{
            axios.get(`/all/battles/${id}`)
                .then(response => {
                    console.log('user2')
                    console.log(response.data);
                    setUser1(response.data.user_1);
                    setUser2(response.data.user_2);
                })
        },3000)
        return () =>  clearInterval(interval);  
    },[id, user2])


    useEffect(()=>{
        let interval = setInterval(()=>{
            axios.get('/all/online')
                .then(response => {
                    console.log('online');
                    console.log(response.data);
                    console.log('user1');
                    console.log(user1);
                    console.log('user2');
                    console.log(user2);
                    let arr = response.data;
                    console.log(arr);
                    let u1 = arr.find(item => item.logIn === user1);
                    let u2 = arr.find(item => item.logIn === user2);
                    console.log('users');
                    console.log(u1)
                    console.log(u2)
                    if(u1 && u2){
                        navigate('/chooseShips');
                    }
                })
        }, 6000)
        return () => clearInterval(interval);
    }, [user2])

   

    return (
        <>
        	<h1>We are waiting for another player</h1>
        	<h2>The id of battle: {id}</h2>
            <p>{timers.map(i => <Timer startSec={res} c={count} key={i} />)}</p>
            <Link to="/profile" className="link">Back</Link>
            <p>{user.login} - {WebSockId}</p>
        </>
    )
}


const CCreate = connect((state) => ({user:state?.auth}))(Create);
export default CCreate;