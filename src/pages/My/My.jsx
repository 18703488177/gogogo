import React, { Component } from 'react'
import axios from "axios"
import Footer from "../../components/Footer/Footer.jsx"
import "../../assets/css/login/login.css"
import img from "../../assets/img/logo.jpg"
import set from "../../assets/img/set.svg"
import { Spin,Icon } from 'antd';



export default class My extends Component {
	state={
		array:[]
	}
	componentDidMount(){
		axios("/api/list").then(res=>{
			this.setState({
				array: res.data.data.list
			  })
			console.log(this.state.array);
			
		})
	}
	handleClick=(e)=>{
		this.props.history.push("/login")
	}
	render() {
		const data=this.state.array
	
		
		return (
		
			<div >
				
				<div className="userInfo">
					<div className="userset"><img src={set}></img></div>
				    <div className="userLogin">
						<img src={img}></img>
						<span onClick={this.handleClick}>登录/注册</span>
						<i>></i>
					</div>	
				</div>
				<div className="list-item" >
					<Spin>
					{
						data.map((item,index)=>{
							return(
								<>
				       <ul key={index} className="list-item1">
						{
							item.map((items,indexs)=>{
							return  <li key={indexs}>{items.title}<i>></i></li>
							})
						}
					   
				   </ul>
				   <div  className="list-item2"></div>
				         </>
					
						 	)})}
					
				</Spin>
				</div>
				
				
				<Footer/>
			</div>
		)
	}
}
