import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './user';
import Users from './Users';
import NotFound from './notfound';
import Home from './Hello';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link,Switch,  NavLink , BrowserRouter as Router } from 'react-router-dom'


const routing = (

	<Router>
	<div>
	<ul>
	<li>
	<NavLink activeClassName='active' to ="/">Home</NavLink>.
	</li>
	<li>
	<NavLink activeClassName="active" to = "/users">Users</NavLink>
	</li>
	<li>
	<NavLink activeClassName="active" to = "/home">Home</NavLink>
	</li>
	</ul>
    <Switch>
	<Route exact  path = "/" component={App}/>
	<Route path ="/users" component={Users}/>
	<Route path ="/home" component={Home}/>
	<Route component={NotFound}/>

	</Switch>
	</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
