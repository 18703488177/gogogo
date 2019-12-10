import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

import "../productListcss/css/header.css"
class Header extends Component {
	render() {
		return (
			<div className="product_list_header">
				<NavBar
					className="product_list_navbar"
					mode="light"
					icon={<Icon type="left" style={{ color:"#666" }} />}
					onLeftClick={() => console.log('onLeftClick')}
					rightContent={[
						<Icon key="0" type="search" style={{ color:"#666" }} />,
					]}
				>
					关西
				</NavBar>
			</div>
		)
	}
}

export default Header
