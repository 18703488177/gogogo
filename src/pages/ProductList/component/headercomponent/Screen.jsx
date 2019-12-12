import React from 'react'
import {Icon} from "antd"
function Screen(){
	return (
		<div className="screen">
			<div>
				<div>综合</div>
				<div>
					<Icon type="caret-down" />
				</div>
			</div>
			<div>
				<div>价格</div>
				<div>
					<Icon type="caret-up" />
					<Icon type="caret-down" />
				</div>
			</div>
			<div>
				<div>筛选</div>
				<div>
					<Icon type="filter" />
				</div>
			</div>
		</div>
	)
}
export default Screen