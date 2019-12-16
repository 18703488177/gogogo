import React, { Component } from 'react'
import "../../../assets/css/login/login2.css"
import { Icon } from 'antd';
import {connect} from "react-redux"
import {getUserInfo} from "../reducer/loginreducer.js"

 class login2 extends Component {
     constructor(props){
         super(props)
         this.state={
             value:"",
             values:""
         }
         this.handleSendClick=this.handleSendClick.bind(this)
     }
     handleSendClick(e){
         const arrList={name:this.state.value,paw:this.state.values}
          console.log(this.props.getUserInfo)
          this.props.getUserInfo(arrList)
         this.setState(()=>{
             return {
                 arrList
             }
         },_=>{
              console.log(this.state.arrList)
             
         })  
          
     }
      handleSubmit=e=>{
          e.preventDefault();
          const value=e.target.value
          this.setState(()=>{
              return {
                  value,
              
                }
              
          })
     
      }
      changepaw=e=>{
        e.preventDefault();
          const value=e.target.value
          this.setState(()=>{
              return {
                  values:value,
              
                }
              
          },_=>{
            //   console.log(this.state)
          })
      }
  

    handleClick=(e)=>{
        this.props.history.go(-1)
   }
   componentDidMount(){
    // this.props.getUserInfo({123:123})
   
   }
//    change=(e)=>{
//        if(this.state.value){
//            e.target.style="white"
//            console.log(e)
//        }

//    }

        
    render() {
        return (
        <div className="mylogin">
            <div className="zcheader"><Icon  onClick={this.handleClick} type="left" /></div>
            <div className="zccontent">
                <div>
                    <span>账号密码登录</span>
                   
                </div>
                 
                 <p>手机号</p>
                <input type="text" name="a" id="" placeholder="请输入手机号" ref="login" value={this.state.value} onChange={this.handleSubmit}/>
                <p>密码</p>
                <input type="text" name="b" id="" placeholder="请输入至少八位数字字母组合" value={this.state.values} onChange={this.changepaw}/>
                <span onClick={this.handleSendClick}>确定</span>
                <a onClick={this.jumpClick}>手机验证码登录</a>
            </div>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        login:state.login
    }
}
export default connect(mapStateToProps,{getUserInfo})(login2)
