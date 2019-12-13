import React, { Component, Fragment } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import BScroll from "better-scroll"
import axios from "axios"
const tabs = [
	{ title: <Badge>全部</Badge> },
	{ title: <Badge>私家定制游</Badge> },
	{ title: <Badge>旅行团</Badge> },
	{ title: <Badge>企业游学</Badge> },
];
// page=1&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4
class TabExample extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pages: 1,
			total: 10,
			order_by: 5,
			list: [],
			flag: true
		}
	}
	render() {
		return (
			<Fragment>
				<Tabs tabs={tabs}
					initialPage={0}
					onChange={(tab, index) => { console.log('onChange', index, tab); }}
					onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
					tabBarUnderlineStyle={{ borderColor: "#C84C7B" }}
					tabBarActiveTextColor="#333"
					tabBarInactiveTextColor="#898989"
				>
					<div className="list_content">
						{
							this.state.list ?
								this.state.list.map((item) => {
									return (
										<div className="product_content" key={item.id}>
											<div className="list_imgBox">
												<img src={item.img} alt="" />
												<span>{item.product_type_name}</span>
											</div>
											<div className="list_product_info">
												<div className="list_product_title">
													<p>{item.title}</p>
													<p>{item.subtitle}</p>
												</div>
												<div className="list_product_footer">
													<ul className="list_product_target">
														{
															item.mark.map(temp => {
																return <li key={temp.name}>{temp.name}</li>
															})
														}
													</ul>
													<div className="list_product_price">
														<p>
															<span>￥</span>
															<span>{(item.price - 0 + "").slice(0, -3) + "," + (item.price - 0 + "").slice(-3)}</span>
															<span>起/</span>
															<span>{item.unit}</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									)
								})
								:
								<div>暂无数据</div>
						}

					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', backgroundColor: '#fff' }}>
						私家定制游
				</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', backgroundColor: '#fff' }}>
						旅行团
				</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', backgroundColor: '#fff' }}>
						企业游学
				</div>
				</Tabs>
				<WhiteSpace />
			</Fragment>
		)
	}
	reqProductList = () => {
		// 当全部请求完毕后不在请求
		if (this.state.flag) {
			this.setState({
				flag: false
			})
			axios(`/api?page=${this.state.pages}&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4`)
				.then(res => {
					let newlist = this.state.list ? [...this.state.list, ...res.data.data.list] : res.data.data.list
					this.setState(() => {
						return {
							total: res.data.data.total,
							pages: this.state.pages + 1,
							list: newlist,
							flag: true
						}
					})
				})
		}


	}
	componentDidMount() {
		this.reqProductList()
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
};
export default TabExample