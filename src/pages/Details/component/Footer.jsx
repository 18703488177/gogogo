import React, { Component } from 'react'
import Swiper from 'swiper';
// var mySwiper = new Swiper('.swiper-container', { /* ... */ });
class Footer extends Component {
	render() {
		return (
			<div className="details_footer">
				<div className="details_footer_service">
					<div>
						<span>
							<i className="iconfont icon-emaxcitygerenxinxitubiaoji02"></i>
						</span>
						<span>收藏</span>
					</div>
					<div>
						<span>
							<i className="iconfont icon-kefu"></i>
						</span>
						<span>客服</span>
					</div>
				</div>
				<div className="details_footer_shopBtn">立即定制</div>
			</div>
		)
	}
}
export default Footer