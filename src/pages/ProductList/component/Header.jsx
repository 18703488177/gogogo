import React, { Component } from 'react'


import NavBar from "./headercomponent/NavBar.jsx"
import "../productListcss/css/header.css";
import TabExample from "./headercomponent/TabExample.jsx"
import Screen from "./headercomponent/Screen.jsx";

class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="product_list_header">
				<NavBar />
				<TabExample />
				<Screen />
			</div>
		)
	}
}

export default Header
