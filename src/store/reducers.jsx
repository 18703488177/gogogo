import {combineReducers} from "redux-immutable";
// import LoginReducer from "../pages/login/reducer/LoginReducer.jsx";
import def from "./defultreducer.jsx"


const reducers = combineReducers(
	{
		def,
		
	}
)

export default reducers