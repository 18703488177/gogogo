import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Home from "./pages/Home/Home.jsx";
import Customized from "./pages/Customized/Customized.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import Find from "./pages/Find/Find.jsx";
import My from "./pages/My/My.jsx";


import Login from './pages/My/component/login.jsx'
import Login2 from './pages/My/component/login2.jsx'

import ProductList from "./pages/ProductList/ProductList.jsx"

class App extends Component {

	render() {
		return (
			<Fragment>
				{/* 一级路由 */}
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/customized" component={Customized} />
					<Route path="/destination" component={Destination} />
					<Route path="/find" component={Find} />
					<Route path="/my" component={My} />


                    <Route path="/login"component={Login}/>
					<Route path='/login2'component={Login2}/>

					<Route path="/productlist" component={ProductList} />
					<Redirect to="/home" from="/" exact />
				</Switch>
			</Fragment>
		);
	}

}
export default App;