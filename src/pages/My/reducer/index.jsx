export const SET_USER_INFO="SET_USER_INFO"



const defaultState={
    avatar:userInfo&&userInfo.avatar||"",
    nickname:userInfo&&userInfo.nickname||"",
    uid:userInfo&&userInfo.uid||"",
  
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case SET_USER_INFO:
            return action.data
            default:
                return state
                
            
    }
}

const setUserInfo=(data)=>({
    type: SET_USER_INFO,
    data
})
export  const getUserInfo=()=>{
          return (dispatch)=>{
              dispatch(setUserInfo())
          }
}