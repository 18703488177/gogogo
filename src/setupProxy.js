const proxy= require("http-proxy-middleware")

module.exports = (app)=>{
    app.use("/api/productlist",proxy({
        target : "https://m.bmtrip.com", //要访问的接口
        pathRewrite : {
            "^/api/productlist" : "/api/v3/m1/product/list" 
        },
        changeOrigin: true,
        secure: false
    }))
    // 
    app.use("/api/productinfo",proxy({
        target : "https://m.bmtrip.com", //要访问的接口
        pathRewrite : {
			// ?page=1&keywords=&theme_id[]=&district_id[]=277&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=278&order_by=5&type=0&platform=4
			// ?page=1&keywords=&theme_id[]=&district_id[]=74&order_by=5&type=0&platform=4
			// ?district_id[]=277&theme_id[]=&type=0&order_by=5&page=2&platform=4
            "^/api/productinfo" : "/api/v3/m1/product/detail"    // 重写请求 将后面的简写成/api    
        },
        changeOrigin: true,
        secure: false
    }))
    // 
    app.use("/api/protype",proxy({
        target : "https://m.bmtrip.com",
        pathRewrite : {
            "^/api/protype" : "/api/v3/m1/product/list/type"
        },
        changeOrigin : true,

    }))
    app.use("/api/protypelist",proxy({
        target : "https://m.bmtrip.com",
        pathRewrite : {
            "^/api/protypelist" : "/api/v3/m1/product/list"
        },
        changeOrigin : true,

    }))
    app.use("/api",proxy({
        target : "https://m.bmtrip.com",
        pathRewrite : {
            "^/api" : "/api/v3/m1/area/group?scene=6&platform=4"
        },
        changeOrigin : true,

    }))
}

