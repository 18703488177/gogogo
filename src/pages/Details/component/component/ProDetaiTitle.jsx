import React, { Component } from 'react'

export default class ProDetaiTitle extends Component {
	render() {
		return (
			<div className="pro_detail_title">
				<p className="pro_detail_title_title">{this.props.data.title}</p>
				<p className="pro_detail_title_subtitle">{this.props.data.subtitle}</p>
				<p className="pro_detail_title_mark">
					{
						this.props.data.mark.map(item => {
							return (
								<span key={item.flag + item.name}>{item.name}</span>
							)
						})
					}
				</p>
				<p className="pro_detail_title_price">￥{(this.props.data.min_price - 0 + "").slice(0, -3) + "," + (this.props.data.min_price - 0 + "").slice(-3)}/{this.props.data.unit}</p>
			</div>
		)
	}
}
