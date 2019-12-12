import React, { Component } from 'react'
import "../../../assets/css/login/zhuce.css"

export default class login extends Component {
    handleClick=(e)=>{
          this.props.history.go(-1)
    }
    jumpClick=(e)=>{
		this.props.history.push("/login2")
	}
    
    render() {
        return (
            <div className="mylogin">
                <div className="zcheader" onClick={this.handleClick}>X</div>
                <div className="zccontent">
                    <div>
                        <span>手机号登录</span>
                        <p>未注册手机验证后即完成注册</p>
                    </div>
                     
                     <p>手机号</p>
                    <input type="text" name="" id="" placeholder="请输入手机号"/>
                    <span>获取验证码</span>
                    <a onClick={this.jumpClick}>账号密码登录</a>
                </div>
            </div>
        )
    }
}
