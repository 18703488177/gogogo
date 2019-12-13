import {combineReducers} from "redux-immutable";
// import LoginReducer from "../pages/login/reducer/LoginReducer.jsx";
import def from "./defultreducer.jsx"
import {login} from "../pages/My/reducer"

const reducers = combineReducers(
	{
		def,
		login
	}
)

export default reducers