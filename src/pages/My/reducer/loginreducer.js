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