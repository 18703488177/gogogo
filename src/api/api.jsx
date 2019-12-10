import axios from "./axios.jsx";

export const gettaskList = ()=>{
	return axios.post("/killer/task2")
}


export const removeTask = (id)=>{
	return axios.post(`/killer/deleteArticle`,{
		id
	})
}


export const getUserLogin = (username, password)=>{
	return axios.post(`/killer/login`,{
		username,
		password
	})
}