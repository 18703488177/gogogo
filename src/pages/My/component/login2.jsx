import React, { Component } from 'react'
import "../../../assets/css/login/login2.css"

import { Icon } from 'antd';


 class login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          showBig: false,
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.inputOnFocus = this.inputOnFocus.bind(this);
        // this.inputOnBlur = this.inputOnBlur.bind(this);
      }
 

    handleClick=(e)=>{
        this.props.history.go(-1)
   }
 

//    componentDidMount(){
//     this.search()
// }
search() {
    const reg = /^1([0-9]*)?$/;	
   
     const getvalue=this.input.value
    if (getvalue==reg) {
      this.setState({
        value:getvalue,
        showBig: true
      })
    } console.log(this.input.value)
  }


        
    render() {
     
        return (
            <div className="mylogin">
            <div className="zcheader"><Icon  onClick={this.handleClick} type="left" /></div>
            <div className="zccontent">
                <div>
                    <span>账号密码登录</span>
                   
                </div>
                 
                 <p>手机号</p>
                <input type="text" name="" id="" placeholder="请输入手机号"  onSubmit={this.handleSubmit} />
                <p>密码</p>
                <input type="password" name="" id="" placeholder="请输入至少八位数字字母组合"/>
                <span>确定</span>
                <a onClick={this.jumpClick}>手机验证码登录</a>
            </div>
        </div>
        )
    }
}


export default login2