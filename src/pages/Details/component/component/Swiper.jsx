import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Swiper extends Component {
	render() {
		return (
			<WingBlank className="pro_con_swiper_box">
					<Carousel
						autoplay={false}
						infinite
						beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						afterChange={index => console.log('slide to', index)}
						className="pro_con_swiper_box"
					>
						{
							this.props.proImg.map(item => (
								<img
									src={item.url}
									alt=""
									style={{ width: '100%', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: 'auto' });
									}}
									key={item.index}
								/>
							))

						}
					</Carousel>
				</WingBlank>
		)
	}
}
