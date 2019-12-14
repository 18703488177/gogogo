import React, { Component } from 'react'
import "../../../assets/css/login/login2.css"
import { Icon } from 'antd';

export default class login2 extends Component {
      handleSubmit=e=>{
        //   e.preventDefault();
          console.log(this.refs.login.outerHTML)
      }

    handleClick=(e)=>{
        this.props.history.go(-1)
   }
   componentDidMount(){
    this.handleSubmit()
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
                <input type="text" name="" id="" placeholder="请输入手机号" ref="login"/>
                <p>密码</p>
                <input type="password" name="" id="" placeholder="请输入至少八位数字字母组合"/>
                <span>确定</span>
                <a onClick={this.jumpClick}>手机验证码登录</a>
            </div>
        </div>
        )
    }
}
