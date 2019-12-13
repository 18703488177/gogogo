const proxy=require("http-proxy-middleware");

module.exports=(app)=>{
    // app.use("/api",proxy({
    //     target:"http://localhost:8000",
    //     pathRewrite:{
    //         '^/api':'/',
    //     },
    //     changeOrigin:true,
    //     secure:false
    // }))
    app.use("/api/productlist",proxy({
        // https://m.bmtrip.com/api/v3/m1/user/info/list?platform=4
        target:"https://m.bmtrip.com",
        pathRewrite:{
            '^/api/productlist':'/api/v3/m1/user/info/list?platform=4',
        },
        changeOrigin:true
    }))

    app.use("/api/list",proxy({
        target : "https://m.bmtrip.com", //要访问的接口
        pathRewrite : {
			// ?page=1&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=278&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=74&order_by=5&type=0&platform=4
			// ?district_id[]=277&theme_id[]=&type=0&order_by=5&page=2&platform=4
            "^/api/list" : "/api/v3/m1/product/list"    // 重写请求 将后面的简写成/api    
        },
        changeOrigin: true,
        secure: false
    }))
}
const proxy= require("http-proxy-middleware")
