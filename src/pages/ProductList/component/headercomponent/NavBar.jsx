import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

function ListNavBar(){
	return (
		<NavBar
				className="product_list_navbar"
				mode="light"
				icon={<Icon type="left" style={{ color: "#666" }} />}
				onLeftClick={() => console.log('onLeftClick')}
				rightContent={[
					<Icon key="0" type="search" style={{ color: "#666" }} />,
				]}
			>
				关西
		</NavBar>
	)
}
export default ListNavBar