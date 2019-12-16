import React, { Component } from 'react'

export default class City extends Component {
	render() {
		return (
			<div className="pro_detail_city">
					<div className="pro_detail_city_left">
						<p>
							<span></span>
							<span>出发地：</span>
							<span>{this.props.startcity}</span>
						</p>
					</div>
					<div className="pro_detail_city_right">
						<p>
							<span>切换城市</span>
							<svg t="1576226419785" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1953" width="200" height="200"><path d="" p-id="1954"></path><path d="M740.592 355.457l-229.238 252.299-228.576-252.753c-1.105-1.219-2.917-1.219-4.025 0l-27.156 25.337c-1.106 1.219-1.106 3.214 0 4.434l256.123 284.179c1.106 1.219 6.683 1.215 7.788-0.007l256.263-284.191c1.104-1.217 1.104-3.207 0-4.423l-27.163-24.876c-1.103-1.217-2.911-1.217-4.015-0.001z" p-id="1955"></path></svg>
						</p>
					</div>
				</div>
		)
	}
}
