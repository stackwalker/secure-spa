import React from 'react'

export default React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}
	},
	onTextChange: function(e){
		this.setState({text: e.target.value})
	},
	onButtonClick: function(e){
		fetch('/test', {
				method: 'post', 
				body: JSON.stringify({text: this.state.text}),
				headers: {"Content-Type": "application/json"},
				credentials: 'same-origin'
			}
		)
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)	
		})
	},
	render: function() {
		return (
			<div>
				<h1>The Dashboard!</h1>
				<input type="text" value={this.state.text} onChange={this.onTextChange}/>
				<button onClick={this.onButtonClick}>Send</button>
			</div>
		)
	}
})
