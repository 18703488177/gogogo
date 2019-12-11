import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import store from "./store/store.jsx"
import App from "./App";
import "./assets/css/common.css"
import "./assets/js/flexible.js"

import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
	(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	),
	document.getElementById("root")
)