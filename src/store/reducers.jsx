import {combineReducers} from "redux";
import LoginReducer from "../pages/My/reducer/loginreducer.js";
import def from "./defultreducer.jsx"

const reducers = combineReducers(
	{
		def,
		LoginReducer
	}
)

export default reducers