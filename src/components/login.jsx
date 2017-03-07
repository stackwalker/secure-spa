import React from 'react'

export default React.createClass({
	getInitialState: function(){
		return {
			user: {}
		}
	},
	onLoginClick: function(){
		console.log('trying to login')		
		console.log(this.state.email)
		console.log(this.state.password)
		$.post('/users/login', {email:this.state.email, password: this.state.password}, (data) => {
			console.log(data)
		})
	/*	fetch('/users/login', {
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
		})*/
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
				<h1>Login</h1>
				<input type="text" placeholder="email" onChange={this.onEmailChange}/>	
				<input type="password" placeholder="password" onChange={this.onPasswordChange}/>	
				<button className="btn-large" onClick={this.onLoginClick}>Login</button>
			</div>
		)
	}
})
