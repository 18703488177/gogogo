import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Header extends Component {
	render() {
		return (
			<div className="details_header">
				<div className="opheader">
					<div className="pro_nav_icon_back" onClick={this.backClick}></div>
					<p className="pro_nav_title"></p>
					<div className="pro_nav_icon_share"></div>
				</div>
			</div>
		)
	}
	backClick = ()=>{
		this.props.history.go(-1)
	}
}

export default withRouter(Header)
