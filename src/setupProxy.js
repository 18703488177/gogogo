const proxy= require("http-proxy-middleware")

module.exports = (app)=>{
    app.use("/api",proxy({
        target : "https://m.bmtrip.com", //要访问的接口
        pathRewrite : {
			// ?page=1&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=278&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=74&order_by=5&type=0&platform=4
			// ?district_id[]=277&theme_id[]=&type=0&order_by=5&page=2&platform=4
            "^/api" : "/api/v3/m1/product/list"    // 重写请求 将后面的简写成/api    
        },
        changeOrigin: true,
        secure: false
    }))
}

// 在要请求的文件中
//  componentDidMount(){
//   axios("/api").then(res=>{
//     console.log(res);
    
//   })
      
// }
