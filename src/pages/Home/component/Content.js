import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
// import BScroll from 'better-scroll'
import axios from 'axios'
import im7 from "../../../assets/img/旅行.png"
import im8 from "../../../assets/img/定制.png"
import im9 from "../../../assets/img/周边.png"
import im10 from "../../../assets/img/自由.png"
import i7 from "../../../assets/img/亲子.png"
import i8 from "../../../assets/img/游轮.png"
import i9 from "../../../assets/img/小树.png"
import i10 from "../../../assets/img/酒店.png"
import "../../../assets/css/index/content.css"

class Content extends Component {
  state = {
    data: ['1', '2', '3',],
    imgHeight: 176,
    array: []
  }
  getdata = () => {
    axios.get("http://localhost:8000/banma").then(res => {
      this.setState({
        array: res.data.data
      })


    });


  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['5df07d6693cbe', '5dd1f60b20ca3', '5dd1f4f7c80f3','5dd1f6371bca9','5dd1f65c84591','5dd1f6a3815e4'],
      });
    }, 100);

    this.getdata()

  }
  jump = (proid)=>{
    this.props.history.push({pathname : "/details",query : {proid}})
  }
  render() {



    return (

      <div className="wrapper2-content">


        <WingBlank style={{ margin: " 0.3rem" }}>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map((val,index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img className="Img0"
                     
                  src={`https://product-ssl-qiniu.bmtrip.com/product_${val}.jpg?`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>

        </WingBlank>
        <div className="change" style={{ width: "100%", height: "1.16rem" }}>
          <div>
            <img src={im7}></img>
            <span>旅行团</span>
          </div>
          <div>
            <img src={im8}></img>
            <span>定制游</span>
          </div>
          <div>
            <img src={im10}></img>
            <span>自由行</span>
          </div>
          <div>
            <img src={im9}></img>
            <span>周边游</span>
          </div>
        </div>
        <div className="change2" style={{ width: "100%", height: "1.16rem" }}>
          <div>
            <img src={i7}></img>
            <span>欢淘亲子</span>
          </div>
          <div>
            <img src={i8}></img>
            <span>精选游轮</span>
          </div>
          <div>
            <img src={i10}></img>
            <span>海岛海滨</span>
          </div>
          <div>
            <img src={i9}></img>
            <span>周边酒店</span>
          </div>
        </div>
        <div className="content">
          <p>带着孩子探索世界</p>
          <div>
            {
              this.state.array.map((item,index) => {
                return (

                  <dl key={index}>
                    <img src={item.img} onClick={this.jump.bind(this, item.id)}></img>
                    <div>
                       <p>{item.title}</p>
                      <div className="info">
                      <span>{item.subtitle}</span>
                  
                      </div>
                      <ul>
                        {item.mark.map((items,indexs)=>{
                          return(
                              <li key={indexs}>{items.name}</li>
                          )
                        })}
                       
                      </ul>
                    </div>
                     <p className="price">￥{item.price}起/{item.unit}</p>
                  </dl>

                )
              })}
          </div>
          <div>

          </div>
        </div>
      </div>
    )


  }
}


export default withRouter(Content)
