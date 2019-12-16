import React, { Component, Fragment } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { withRouter } from "react-router-dom"
import BScroll from "better-scroll"
import axios from "axios"
import Procell from "./Procell.jsx"
// page=1&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4
class TabExample extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pages: 1,
			total: 10,
			order_by: 5,
			list: [],
			flag: true,
			id: 277,
			tabs: [{ title: <Badge></Badge> }],
			clifList: [],
			typlist: []
		}
	}
	render() {
		// console.log(this.props.location.query.id);

		return (
			this.state.list && <Fragment>
				<Tabs tabs={this.state.tabs}
					initialPage={0}
					onChange={(tab, index) => { this.tabOnchange(tab, index) }}
					tabBarUnderlineStyle={{ borderColor: "#C84C7B" }}
					tabBarActiveTextColor="#333"
					tabBarInactiveTextColor="#898989"
				>
					<div className="list_content">
						{
							this.state.list.map((item) => {
								return (
									<Procell key={item.id} {...item} />
								)
							})
						}

					</div>
					<div className="list_content">
						{
							this.state.typlist.length != 0 && this.state.typlist.map((item) => {
								return (
									<Procell key={item.id} {...item} />
								)
							})
						}
					</div>
					<div className="list_content">
						{
							this.state.typlist.length != 0 && this.state.typlist.map((item) => {
								return (
									<Procell key={item.id} {...item} />
								)
							})
						}
					</div>
					{this.state.tabs.length == 4 && <div className="list_content">
						{
							this.state.typlist.length != 0 && this.state.typlist.map((item) => {
								return (
									<Procell key={item.id} {...item} />
								)
							})
						}
					</div>}


				</Tabs>
				<WhiteSpace />
			</Fragment>
		)
	}
	// tab切换
	tabOnchange = (tab, index) => {
		// console.log(tab.type);
		let listContent = document.getElementsByClassName("list_content")
		if (tab.type == 0) {
			listContent[1].style.paddingTop = "1.8rem"
			return
		}
		this.tabReqproList(tab.type, _ => {
			listContent[index].style.paddingTop = "0rem"
		})


	}
	// 进入页面请求接口
	reqProductList = () => {
		// 当全部请求完毕后不在请求
		if (this.state.flag) {
			this.setState({
				flag: false
			})
			// /type?keywords=&theme_id=&district_id=277&platform=4
			let type = axios(`/api/protype?keywords=&theme_id=&district_id=${this.state.id}&platform=4`)
			let datainfo = axios(`/api/productlist?page=${this.state.pages}&keywords=&theme_id[]=&district_id[]=${this.state.id}&order_by=5&type=0&platform=4`)
			Promise.all([type, datainfo])
				.then(res => {
					// console.log(res);
					// let clifList = []
					let newlist = this.state.list ? [...this.state.list, ...res[1].data.data.list] : res[1].data.data.list
					let typeList = res[0].data.data.list.map(item => {
						// item.title != "全部" && clifList.push({typeid: item.type,typename:item.title, info: []})
						return { title: <Badge>{item.title}</Badge>, type: item.type }
					})

					this.setState(() => {

						return {
							total: res[1].data.data.total,
							pages: this.state.pages + 1,
							list: newlist,
							flag: true,
							tabs: typeList,
							// clifList
						}
					})
				})
		}


	}
	// tab切换请求接口
	tabReqproList = (type, fn) => {
		axios(`/api/protypelist?page=1&keywords=&theme_id[]=&district_id[]=${this.state.id}&order_by=5&type=${type}&platform=4`)
			.then(res => {
				this.setState(() => {
					let typlist = [...res.data.data.list]
					return {
						typlist
					}
				}, _ => {
					// console.log(this.state.typlist);
					fn()
				})

			})
	}
	// 上拉加载
	xljzScroll = () => {
		const snack = document.getElementsByClassName("am-tabs-pane-wrap-active")[0]

		if (!this.scroll) {
			this.scroll = new BScroll(snack, {
				scrollY: true,
				scrollX: false
			})
		} else {
			this.scroll.refresh()
		}

		this.scroll.on("touchEnd", obj => {
			//上拉加载
			if (obj.y < this.scroll.maxScrollY) {
				console.log("加载吧");

				this.state.list.length < this.state.total && this.reqProductList()
			}
			//下拉刷新
			//   if(obj.y > 130){
			// 	  console.log("刷新把");
			// 	  this.getCakeList("upLoading")
			//   }
		})
	}
	componentDidMount() {
		this.setState({
			id: this.props.location.query ? this.props.location.query.id : 277
		}, _ => {
			this.reqProductList()
			this.xljzScroll()
		})



	}
};
export default withRouter(TabExample)