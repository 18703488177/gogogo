import React, {Component} from "react";

import Img  from "../../../assets/img/首页.svg"
import Img1  from "../../../assets/img/目的地.svg"
import Img2  from "../../../assets/img/定制游.svg"
import Img3  from "../../../assets/img/发现.svg"
import Img4  from "../../../assets/img/我的.svg"

import "../../../assets/css/index/footer.css"

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer">
               
                    <div>
                        <div><img src={Img} ></img></div>
                        <div><span>首页</span></div>
                    </div>
                    <div>
                        <div><img src={Img1} style={{marginTop:"-0.08rem"}} ></img></div>
                        <div><span>目的地</span> </div>
                    </div>
                    <div>
                        <div><img src={Img2} style={{marginTop:"-0.45rem"}} ></img></div>
                        <div><span>定制游</span></div>
                    </div>
                    <div>
                        <div><img src={Img3} style={{marginTop:"-0.04rem"}}></img></div>
                        <div><span>发现</span></div>
                    </div>
                    <div>
                        <div><img src={Img4} style={{marginTop:"-0.07rem"}}></img></div>
                        <div><span>我的</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer