import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
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
import product from '../../../assets/img/product4.jpg'
import "../../../assets/css/index/content.css"

export default class Content extends Component {
    state = {
        data: ['1', '2', '3',],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
        axios.get("http://localhost:8000/api/banma").then(res=>{
        console.log(res)
      })
      }
      render() {
        return (
          
            <div className="wrapper2-content">

          
          <WingBlank style={{margin:" 0.3rem"}}>
            <Carousel
              autoplay={true}
              infinite
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
            <div className="change" style={{width:"100%",height:"1.16rem"}}>
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
             <div className="change2" style={{width:"100%",height:"1.16rem"}}>
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
                    <dl>
                       <img src={product}></img>
                       <div>
                         <p>神奇动物在这里|新西兰11天9晚</p>
                            <div className="info">
                              <span className="span1">亲子首选</span>
                              <span>亲子首选</span>
                              <span>亲子首选</span>
                              <span>亲子首选</span>
                              <span>亲子首选</span>
                          </div>
                          <ul>
                            <li>亲子</li>
                            <li>看动物</li>
                            <li>亲近自然</li>
                          </ul>
                       </div>
                    </dl>
                    <dl>
                       <img></img>
                       <div><p>神奇动物在这里|新西兰11天9晚</p></div>
                    </dl>
                    <dl>
                       <img></img>
                       <div><p>神奇动物在这里|新西兰11天9晚</p></div>
                    </dl>
                    <dl>
                       <img></img>
                       <div>
                          <p>神奇动物在这里|新西兰11天9晚</p>
                          <div className="info">
                              <span>亲子首选</span>
                          </div>
                       </div>
                    </dl>
                    <dl>
                       <img></img>
                       <div>
                          <p>神奇动物在这里|新西兰11天9晚</p>
                          <div className="info">
                              <span>亲子首选</span>
                          </div>
                       </div>
                    </dl>
                    <dl>
                       <img></img>
                       <div>
                          <p>神奇动物在这里|新西兰11天9晚</p>
                          <div className="info">
                              <span>亲子首选</span>
                          </div>
                       </div>
                    </dl>
                 </div>
               <div>

               </div>
             </div>
             </div>
        )
      }
  
    
  }
