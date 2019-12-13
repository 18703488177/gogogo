import React, { Component, Fragment } from 'react';

import Header from "./component/Header.jsx";
import Content from "./component/Content.jsx";
import Footer from "./component/Footer.jsx";
import "./Detailscss/css/detailcss.css"
class Details extends Component {
	render() {
		return (
			<div className="details">
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</div>
		)
	}
}
export default Details