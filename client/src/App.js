import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<div className='App'>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route path='*' component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
