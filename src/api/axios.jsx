import axios from "axios";

const service = axios.create({
    baseURL : "http://rap2api.taobao.org/app/mock/238535"
}) 

service.interceptors.request.use(req=>{
	req.headers = {...req.headers, "userToken":123456}
	return req
})

service.interceptors.response.use(res=>{
	return res.data.data
})

export default service