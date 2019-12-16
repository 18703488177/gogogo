import {getUserLogin} from "../../../api/api.jsx"

export const SET_USER_INFO="SET_USER_INFO"


const defaultState={
    uid:"",
    nickname:"",
    avatar:""
}


export default (state=defaultState,action)=>{
      switch(action.type){
          case SET_USER_INFO:
             return action.data
             default :
              return state

      }
}
const setUserInfo=(data)=>({
    type:SET_USER_INFO,
    data
})
// 获取信息
export const getUserInfo=(userInfo)=>{
        return (dispatch)=>{
            // dispatch(setUserInfo())
            getUserLogin(userInfo).then(res=>{
                console.log(res)
            })
        }
    
}