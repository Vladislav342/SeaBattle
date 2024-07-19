import React from 'react';
import axios from 'axios';


const GetUsers = async () => {
			return await axios.get('http://localhost:4000/all/users')
				.then((res) => {
					return res.data;	
				})
		}

export default GetUsers;