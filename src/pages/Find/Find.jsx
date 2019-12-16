import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import BScroll from "better-scroll"
import axios from "axios"
import Footer from "../../components/Footer/Footer.jsx"
import "../../assets/css/find/find.css";
import { SegmentedControl, WingBlank } from 'antd-mobile';

const { SubMenu } = Menu;
export default class Find extends Component {
	state = {
		current: 'mail',
		array: [],
		list: [],
		pages: 2,
		flag: true
	};
	onChange = (e) => {
		console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
	}
	onValueChange = (value) => {
		console.log(value);
	}

	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});

	};
	// 加载
	adddata=()=>{
			if (this.state.flag) {
			this.setState({
				flag: false
			})
			axios(`/api/find/?page=${this.state.pages}&size=6&platform=4`).then(res => {
				let newlist = this.state.list ? [...this.state.list, ...res.data.data.list] : res.data.data.list
				this.setState(() => {
					return {
						array: res.data.data.list,
						pages: this.state.pages + 1,
						list: newlist,
					}

				})
				console.log(newlist);

			})
		}
	}
	componentDidMount() {
	       this.adddata()  
	}
	add=()=>{
		const snack = document.getElementsByClassName("section")[0]
		if (!this.scroll) {
			this.scroll = new BScroll(snack, {
				scrollY: true,
				scrollX: false
			})
		} else {
			this.scroll.refresh()
		}
	}

	render() {
		const data = this.state.array
		// console.log(data)
		return (
			<WingBlank size="lg" className="sc-example">
				<div>
					<div className="find-allheader">
						<header>
							<div className="find-herder">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+" />
								<p>斑马发现</p>
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg=="></img>
							</div>
						</header>
						<nav className="find-nav">


							<SegmentedControl selectedIndex={1} values={['全部', '涨知识', '看世界', '达人说', '有福利']} />
							{/* <li><span>全部</span></li>
					<li><span>涨知识</span></li>
					<li><span>看世界</span></li>
					<li><span>达人说</span></li>
					<li><span>有福利</span></li> */}
						</nav>
					</div>
					<section className="sec">

						{
							data.length != 0 && data.map((item, index) => {
								return (
									// <div>123</div>
									<div key={index}>
										<img src={item.head_pic}></img>
										<div className="find-cont">{item.title}</div>
										<div className="find-cont2">{item.subtitle}</div>
										<div className="bmfind-item-type">{item.sort_name}</div>
									</div>
								)
							})




						}

					</section>
					<Footer />
				</div>
			</WingBlank>
		)
	}
}
