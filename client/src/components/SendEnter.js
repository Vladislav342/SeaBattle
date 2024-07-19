import React, {useEffect, useRef, useState}  from 'react';

let SendEnter = () => {
	const [sec, setSec] = useState(2);
	useEffect(() => {
			if(sec === 0) return;
			const interval = setInterval(() => {
	 			setSec(sec=>sec-1)
			},2000)
			return () => { 
	        	clearInterval(interval)	
	        }
		}, [sec])

	return sec===0 ? (
		<>
			history("/profile");
		</>
	) : (
        <div style={{width: "10rem", height: "10rem", marginTop: "20%"}}>
            <span>Loading...</span>
        </div>
	)
}

export default SendEnter;