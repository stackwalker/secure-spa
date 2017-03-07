import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/app'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Signup from './components/signup'

const routes = <Route component={App}>
  <Route path="/" component={Dashboard}/>
	<Route path="/login" component={Login} />
	<Route path="/signup" component={Signup} />
</Route>

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)



