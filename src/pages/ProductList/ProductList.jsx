import React, {Component} from "react";
import Header from "./component/Header.jsx";
import "./productListcss/css/productList.css"
class ProductList extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<div className="product-list">
				<Header></Header>
			</div>
		)
	}
}

export default ProductList