import React, { Component, Fragment } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./css/bourn.css"
import MainFooter from "../../components/Footer/Footer.jsx";
import MainHeader from "./component/header";
import axios from "axios"
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Bourn extends Component {
		state={
				// title : ["日本","欧洲","泰国","东南亚","海岛","中东/非洲","美洲/澳新","国内"],
				typeIndex: 0,
				array : [],
				num : 2,
		}
		componentDidMount(){
			axios("/api/dd").then(res=>{
				this.setState({
					array : res.data.data
				})
				console.log(1);
				
			})

			
			
		}
		handleClick=(index,e)=>{
			this.setState({
				typeIndex : index
			})
			this.clearClassName()
			e.target.className = "Spanactive"
			// e.target.parentNode.parentNode.style.background = "pink"
		}
		clearClassName = ()=>{
			let aSpan = document.getElementsByClassName("Spanactive")
			
			for(let i = 0 ; i < aSpan.length ; i++){
				// console.log(aSpan[i].parentNode);
				// aSpan[i].parentNode.parentNode.style.background = "#fff"
				aSpan[i].className = "";
				
				
				
			}
			
		}
		handleAdd=()=>{
			if(this.state.num %2==0){
				this.refs.limg.style.height= "100%"
			}else{
				this.refs.limg.style.height= "3.2rem"
			}
			this.state.num++
		}
		handlejump(id,e){
			this.props.history.push({pathname : "/productlist",query : {id}})
			
		}
		handlejump1(proid,e){
			// console.log(id);
			this.props.history.push({pathname : "/details",query : {proid}})
			console.log(proid);
			
		}
		render(){
			
			// console.log(this.state.array.list);
			// console.log(this.state.typeIndex);
				return(
					<Fragment>
						<MainHeader />
						<Layout>
						<Content>
							<Layout>
									{ 
										// console.log(this.state.array.list && this.state.array.list[this.state.typeIndex])
										// console.log(this.state.array.list)
										
										this.state.array.list ? 
										<div className="no">
											<div className="L-letf">
													<div className="L-img" ref="limg">
														{
															this.state.array.list[this.state.typeIndex].children.map((item,index)=>{
																console.log(item);
																
																return <div key={index} onClick={this.handlejump.bind(this,item.id)} className="L-img1">
																			<img src={item.img} alt=""/>
																			<div className="L-border">
																				<p>{item.name_en}</p>
																				<span>{item.label}</span>
																			</div>
																		</div>
															})
															
														}
													</div>
													<div className="L-text" onClick={this.handleAdd}>
															<span>更多目的地</span><img className="disB" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjQzA0Mzc0IiBjeD0iNiIgY3k9IjYiIHI9IjYiLz48cGF0aCBkPSJNNiA1LjM3OWwyLjQ3NSAyLjQ3NWEuNS41IDAgMCAwIC43MDctLjcwOEw2LjM1NCA0LjMxOGEuNDk4LjQ5OCAwIDAgMC0uNzA4IDBMMi44MTggNy4xNDZhLjUuNSAwIDAgMCAuNzA3LjcwOEw2IDUuMzc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4="></img>
													</div>
													<p className="C-text">热门推荐</p>
													 {
														this.state.array.list[this.state.typeIndex].product.map((item,index)=>{
																return <div key={index} className="C-img">
																			<img onClick={this.handlejump1.bind(this,item.id)} src={item.img}></img>
																			<p className="text1">{item.title}</p>
																			<p className="text2">{item.subtitle}</p>
																			<span className="money">￥ {item.price}起/{item.unit}</span>
																			<div className="text3">{item.tip_mark}</div>
																		</div>
														})
													}
													
											</div>
										</div>
											:<div className="no">暂无数据</div>
									}
									
								<Sider width={100} height={800} style={{ background: '#F9F9F9',fontSize: "14px" ,lineHeight:"48px"}}>
									<Menu
										mode="inline"
										defaultSelectedKeys={['1']}
										defaultOpenKeys={['sub1']}
										style={{ height: '100%' }}
									>
											{
												
												this.state.array.list ? 
												this.state.array.list.map((item,index)=>{
													// console.log(item);
													return <SubMenu key={index} title={<span onClick={this.handleClick.bind(this,index)}>{item.label}</span>}></SubMenu>
												}) :
												<span>暂无数据</span>
												
													
											}
									 
									</Menu>
								</Sider>
							</Layout>
						</Content>
					</Layout>
						<MainFooter />
					</Fragment>
				)
		}
}
