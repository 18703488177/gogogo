import React, {Component} from "react";
import {Link} from "react-router-dom"
import Img  from "../../assets/img/首页.svg"
import Img1  from "../../assets/img/目的地.svg"
import Img2  from "../../assets/img/定制游.svg"
import Img3  from "../../assets/img/发现.svg"
import Img4  from "../../assets/img/我的.svg"

import "../../assets/css/index/footer.css"

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
          color: '#C04374'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
    
        
        this.setState(_ => ({
          isToggleOn: !this.state.isToggleOn,
          color: this.state.isToggleOn ? '#C04374': '#333'
        
          
        }),_=>{
            console.log(11);
            
        } ); 
      }
    render(){
        return(
            <div>
                <div className="footer">
               
                    <Link to="/">
                        <div onClick={this.handleClick}>
                            <div><img src={Img} ></img></div>
                            <div><span>首页</span></div>
                        </div> 
                    </Link>
                    <Link to="/destination">
                       <div  style={this.handleClick?{color: (this.state.color)}:null}>
                            <div><img src={Img1} style={{marginTop:"-0.08rem"}} ></img></div>
                            <div><span>目的地</span> </div>
                      </div> 
                    </Link>
                    <Link to="/customized">
                       <div>
                            <div><img src={Img2} style={{marginTop:"-0.45rem"}} ></img></div>
                            <div><span>定制游</span></div>
                      </div> 
                    </Link>
                    <Link to="/find">
                        <div><img src={Img3} style={{marginTop:"-0.04rem"}}></img></div>
                        <div><span>发现</span></div>
                    </Link>
                    <Link to="/my">
                        <div><img src={Img4} style={{marginTop:"-0.07rem"}}></img></div>
                        <div><span>我的</span></div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer