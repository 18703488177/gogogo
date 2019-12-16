import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Procell extends Component {
	constructor(props){
		super(props)
	}
	render() {
		// console.log(this.props);
		return (
			<div className="product_content" onClick={this.prohandlePush.bind(null, this.props.id)}>
				<div className="list_imgBox">
					<img src={this.props.img} alt="" onClick={this.prohandlePush.bind(null, this.props.id)} />
					<span>{this.props.product_type_name}</span>
				</div>
				<div className="list_product_info">
					<div className="list_product_title">
						<p>{this.props.title}</p>
						<p>{this.props.subtitle}</p>
					</div>
					<div className="list_product_footer">
						<ul className="list_product_target">
							{
								this.props.mark.map(temp => {
									return <li key={temp.name}>{temp.name}</li>
								})
							}
						</ul>
						<div className="list_product_price">
							<p>
								<span>￥</span>
								<span>
									{
										((this.props.price - 0 + "").slice(0, -3) + "," + (this.props.price - 0 + "").slice(-3)) == ",0"
											? "现询" :
											((this.props.price - 0 + "").slice(0, -3) + "," + (this.props.price - 0 + "").slice(-3)) + "起/" + this.props.unit
									}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	prohandlePush = (proid)=>{
		console.log(1111111);
		this.props.history.push({pathname : "/details",query : {proid}})
	}
}
export default withRouter(Procell)