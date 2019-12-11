import axios from "axios";

const service = axios.create()

service.interceptors.request.use(req=>{
	req.headers = {...req.headers, "userToken":123456}
	return req
})

service.interceptors.response.use(res=>{
	return res.data.data
})

export default service