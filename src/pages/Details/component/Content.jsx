import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import axios from "axios"
import ProDetaiTitle from "./component/ProDetaiTitle.jsx"
import Swiper from "./component/Swiper.jsx"
import City from "./component/City.jsx"
import jsond from "../../../assets/json/data.json"
class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			proImg: [],
			data: {},
			detailsHeader: "",
			proNavIconBack: "",
			proNavIconShare: "",
			proNavTitle: "",
			flag: true,
			startcity: "上海",
			proCitiesInfo: "",
			id: 2136
		}
	}
	//数据请求
	resDetailInfo() {
		axios.get("/api/productinfo",{
			params: {
				product_id : this.state.id,
				platform : 4
			}
		})
		.then((res)=>{
			let data = res.data.data
			this.setState(()=>{
				return {
					proImg: data.product_img_www,
					data
				}
			},_=>{
				console.log(res.data.data);

			})

		})
		// setTimeout(() => {
		// 	this.setState(() => {
		// 		return {
		// 			proImg: jsond.data.product_img_www,
		// 			data: jsond.data
		// 		}
		// 	},
		// 		_ => {
		// 			console.log(this.state.data);

		// 		});
		// }, 100);
	}
	//清除样式
	clearStyle(oldclass, nowclass){
		let ele = document.getElementsByClassName(oldclass);
		for(let i = 0, k = ele.length ; i < k ; i++){
			ele[i].className = nowclass
		}
	}
	//切换效果
	groupClick = (e)=>{
		
		this.clearStyle("group_active", "group_info")
		e.target.className = "group_info group_active"
		
	}
	// 滚动条  吸顶等
	headerscroll() {
		let scrollBox = document.getElementsByClassName("details")[0];
		scrollBox.addEventListener("scroll", (e) => {
			let st = this.state;
			// 头部初始获取节点 设置默认样式
			if (!st.detailsHeader) {
				st.detailsHeader = document.getElementsByClassName("details_header")[0];
				st.proNavIconBack = document.getElementsByClassName("pro_nav_icon_back")[0];
				st.proNavIconShare = document.getElementsByClassName("pro_nav_icon_share")[0];
				st.proNavTitle = document.getElementsByClassName("pro_nav_title")[0];
				st.proIntroduce = document.getElementsByClassName("pro_introduce")[0];
				st.proCitiesInfo = document.getElementById("item0")

				st.detailsHeader.style.background = "transparent";
				st.proNavIconBack.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgMTcuNjZMOC4zNCAxMiAxNCA2LjM0Ii8+PC9nPjwvc3ZnPg==")`;
				st.proNavIconShare.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiIHN0cm9rZT0iI0ZGRiI+PGNpcmNsZSBjeD0iMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48cGF0aCBkPSJNMy44MyA1LjI3bDMuNDYtMi4xMU0zLjcyIDYuOThsNC4zNyAyLjM5Ii8+PC9nPjwvZz48L3N2Zz4=")`;
			}
			// 防抖会很丑
			// if (!st.flag) {
			// 	return;
			// }

			// this.setState({
			// 	flag: false
			// })

			// st.timer = setTimeout(() => {
				// 头部变样式
				if (scrollBox.scrollTop >= 232.5) {
					if (st.detailsHeader.style.background == "transparent") {
						st.detailsHeader.style.background = "#fff";
						st.proNavIconBack.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05IDE4YS40Ny40NyAwIDAxLS4zNS0uMTVMLjE2IDkuMzVhLjUuNSAwIDAxMC0uN0w4LjY1LjE2YS41LjUgMCAwMS44NDguMzU1LjUuNSAwIDAxLS4xNDguMzU1TDEuMjIgOWw4LjEzIDguMTNhLjUuNSAwIDAxMCAuNzFBLjQ3LjQ3IDAgMDE5IDE4eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+")`;
						st.proNavIconShare.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNCAxMC41YTMuNDcgMy40NyAwIDAwLTMuMSAxLjkybC0zLjYxLTIuMjZBMy40MSAzLjQxIDAgMDA3LjUgOWEzLjYgMy42IDAgMDAtLjI5LTEuMzlsMi4xMi0xLjM3QTMuNDggMy40OCAwIDEwOC41IDRjLjAwMi40ODEuMTAxLjk1Ny4yOSAxLjRMNi42NyA2Ljc3QTMuNDYgMy40NiAwIDAwNCA1LjVhMy41IDMuNSAwIDEwMi44MiA1LjU1bDMuNzQgMi4zNGE0LjA3IDQuMDcgMCAwMC0uMDYuNjEgMy41IDMuNSAwIDEwMy41LTMuNXptLTItOWEyLjUgMi41IDAgMTEwIDUgMi41IDIuNSAwIDAxMC01em0tOCAxMGEyLjUgMi41IDAgMTEwLTUgMi41IDIuNSAwIDAxMCA1em0xMCA1YTIuNSAyLjUgMCAxMTAtNSAyLjUgMi41IDAgMDEwIDV6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=")`;
						st.detailsHeader.style.borderBottom = "0.5px solid #ccc"
						st.proNavTitle.innerHTML = st.data.title
					}
				} else {
					if (st.detailsHeader.style.background == "rgb(255, 255, 255)") {
						st.detailsHeader.style.background = "transparent";
						st.detailsHeader.style.borderBottom = ""
						st.proNavIconBack.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgMTcuNjZMOC4zNCAxMiAxNCA2LjM0Ii8+PC9nPjwvc3ZnPg==")`;
						st.proNavIconShare.style.background = `center no-repeat url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiIHN0cm9rZT0iI0ZGRiI+PGNpcmNsZSBjeD0iMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48cGF0aCBkPSJNMy44MyA1LjI3bDMuNDYtMi4xMU0zLjcyIDYuOThsNC4zNyAyLjM5Ii8+PC9nPjwvZz48L3N2Zz4=")`;
						
						st.proNavTitle.innerHTML = ""
					}
				}
				// 导航吸顶
				if(scrollBox.scrollTop >= 397){
					if(st.proIntroduce.style.position != "fixed"){
						st.proIntroduce.style.position = "fixed"
						st.proCitiesInfo.style.paddingTop = "2.2rem"
					}
				}else{
					if(st.proIntroduce.style.position == "fixed"){
						st.proIntroduce.style.position = "static"
						st.proCitiesInfo.style.paddingTop = ""
					}
				}

			// 	this.setState({
			// 		flag: true
			// 	})
			// }, 300)
		})
	}
	// 切换样式
	proInfoPosi = (e)=>{
		this.clearStyle("pro_info_posi", "")
		e.target.firstElementChild.className = "pro_info_posi"
	}
	componentDidMount() {
		this.setState({
			id: this.props.location.query ? this.props.location.query.proid : 2136
		}, _ => {
			this.resDetailInfo()
			this.headerscroll()
		})
		
		console.log(this.props);
		
	}
	render() {
		console.log(this.state.proImg);
		return (
			this.state.proImg ? this.state.proImg.length!=0 && <div className="details_content">
				<Swiper proImg={[...this.state.proImg]} />
				<ProDetaiTitle data={{...this.state.data}} />
				<City startcity={[...this.state.startcity]} />
				
				
				<div className="pro_cities">
					{/* 吸顶 */}
					<div className="pro_introduce">
						<div className="pro_introduce_group">
							{
								this.state.data.group_list[1].list.map((item,index)=>{
									let clas = "group_info"
									if(index == 0){
										clas = "group_info group_active"
									}
									return <span key={item.id} onClick={this.groupClick} className={clas}>{item.name}</span>
								})
							}
						</div>
						<div className="pro_cities_info_classify">
							{/* 锚点跳转 */}
							<a onClick={this.proInfoPosi} href="#item0">
								产品亮点
								<span className="pro_info_posi"></span>
							</a>
							<a onClick={this.proInfoPosi} href="#item1">
								特色体验
								<span></span>
							</a>
							<a onClick={this.proInfoPosi} href="#item2">
								行程安排
								<span></span>
							</a>
						</div>
					</div>
					<div className="pro_cities_info">
						<div id="item0">
							<div className="product_detail_label"></div>
							<div className="feature_content" dangerouslySetInnerHTML={{
							__html : this.state.data.feature[0]&&this.state.data.feature[0].content&&this.state.data.feature[0].content
							}}></div>
						</div>
						<div id="item1">
							<div className="product-detail-label"></div>
							<div className="feature_content">
								{
									this.state.data.high_feature.map((item, i)=>{
										return(
											<div key={i + item.title}>
											<div className="feature_content_title">{item.title}</div>
											<>
												{
													item.list.map((temp, index)=>{
														return (
															<div key={index + temp.label} className="feature_content_tsdd">
																<img src={temp.imgs[0]} alt=""/>
																<p>
																	<span>{temp.label}</span>
																</p>
																<p>{temp.title}</p>
																<p>{temp.content}</p>
															</div>
														)
													})
												}
											</>
											</div>
										)
									})
								}
							</div>
							{/*  */}
						</div>
						<div id="item2"></div>
						<div id="item3"></div>
					</div>
				</div>
				
				
			</div>
			:
			<div>暂无数据</div>
		);
	}
}

export default withRouter(Content)