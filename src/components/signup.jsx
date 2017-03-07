import React from 'react'
import 'isomorphic-fetch'

export default React.createClass({
	getInitialState: function(){
		return {
			user: {}
		}
	},
	onSignupClick: function(){
		console.log('trying to signup')		
		console.log(this.state.email)
		console.log(this.state.password)
		fetch('/users/signup', {
				method: 'post', 
				body: JSON.stringify({email: this.state.email, password: this.state.password}),
				headers: {"Content-Type": "application/json"}
			}
		)
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)	
		})
	},
	onEmailChange: function(e){
		console.log("setting email: ", e.target.value)
		this.setState({email: e.target.value})
	},
	onPasswordChange: function(e){
		console.log("setting password: ", e.target.value)
		this.setState({password: e.target.value})
	},
	render: function() {
		return (
			<div>
				<h1>Signup</h1>
				<input type="text" placeholder="email" onChange={this.onEmailChange}/>	
				<input type="password" placeholder="password" onChange={this.onPasswordChange}/>	
				<button className="btn-large" onClick={this.onSignupClick}>Signup</button>
			</div>
		)
	}
})
