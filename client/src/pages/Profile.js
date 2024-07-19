import React from 'react';
import ProfileRendering from "./ProfileRendering";
import { Link, Navigate } from "react-router-dom";
import { setUserData } from "../actions/actionSetUserData";
import { setError } from "../actions/actionError";
import { logOut } from '../actions/actionLogout';
import axios from "axios";
import { connect } from "react-redux";


class Profile extends React.Component{
	async componentDidMount(){
		axios.get('auth/me', {withCredentials: true})
			.then(response => {
				if(response.data.id && response.data.login){
					if(localStorage.authCode === 'undefined'){
						let {id, login} = response.data;
						this.props.setUserData(id, login);
						localStorage.setItem('authCode', id);
						localStorage.setItem('authLogin', login);
					}else{
						this.props.setUserData(localStorage.getItem('authCode'), localStorage.getItem('authLogin'));
					}
				}else{
					let {message, statusCode} = response.data;
					this.props.setError(message,statusCode);
				}
			})
			.catch(err => {
				console.log(err);
			})
	}
	render(){
		return this.props.login === undefined ? (
				this.props.message === "Логин или пароль не верен" ? (
					<Link className="link" to="/login"> Back (error)</Link>
				):(
					<Link className="link" to="/registration"> Back (error)</Link>
				)
				
				
			) : (
				<ProfileRendering {...this.props} />
		);
	}
}

const mapStateToProps = (state) => ({
	login: state?.auth?.login,
	id: state?.auth?.id,
	message: state?.auth?.message,
	statusCode: state?.auth?.statusCode
}); 

const CProfile = connect(mapStateToProps, {setUserData, setError, onLogout: logOut})(Profile);
export default CProfile;