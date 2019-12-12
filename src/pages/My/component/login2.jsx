import React, { Component } from 'react'
import "../../../assets/css/login/login2.css"
import { Icon } from 'antd';

export default class login2 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: false,
    //         iphone: '', //手机号
    //         identCode: '', //验证码
    //         iPhoneValidate: false,// 手机号验证
    //         smsCodeValidate: false,// 验证码验证
    //         CodeValidate: false,// 第一步验证码验证
    //         TimingText: "获取验证码",// 获取验证码文字
    //         ValidateFlag: true,// 展示第一步校验
    //         length: 6, //输入框的个数
    //         codeInput: "", //第一步验证码输入
    //         isShowTime: false,//是否显示自定义倒计时
    //         timeText: "60", //自定义倒计时
    //     }
    // }

    handleClick=(e)=>{
        this.props.history.go(-1)
   }
//      add=()=>{
//          const reg=/^\w{11}$/
//          if(txt==reg){

//          }
//      }
        
    render() {
        return (
            <div className="mylogin">
            <div className="zcheader"><Icon  onClick={this.handleClick} type="left" /></div>
            <div className="zccontent">
                <div>
                    <span>账号密码登录</span>
                   
                </div>
                 
                 <p>手机号</p>
                <input type="text" name="" id="" placeholder="请输入手机号"/>
                <p>密码</p>
                <input type="password" name="" id="" placeholder="请输入至少八位数字字母组合"/>
                <span>确定</span>
                <a onClick={this.jumpClick}>手机验证码登录</a>
            </div>
        </div>
        )
    }
}
