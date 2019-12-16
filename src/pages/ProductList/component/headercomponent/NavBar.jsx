import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from "react-router-dom"
function ListNavBar(props){
	return (
		<NavBar
				className="product_list_navbar"
				mode="light"
				icon={<Icon type="left" style={{ color: "#666" }} />}
				onLeftClick={() => props.history.go(-1)}
				rightContent={[
					<Icon key="0" type="search" style={{ color: "#666" }} />,
				]}
			>
				关西
		</NavBar>
	)
}
export default withRouter(ListNavBar)