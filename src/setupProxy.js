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
    // app.use("/api/productlist",proxy({
    //     // https://m.bmtrip.com/api/v3/m1/user/info/list?platform=4
    //     target:"https://m.bmtrip.com",
    //     pathRewrite:{
    //         '^/api/productlist':'/api/v3/m1/user/info/list?platform=4',
    //     },
    //     changeOrigin:true
    // }))
    // app.use("/api",proxy({
    //     // https://m.bmtrip.com/api/v3/m1/user/info/list?platform=4
    //     target:"https://m.bmtrip.com",
    //     pathRewrite:{
    //         '^/api':'/api/v3/m1/user/info/list',
    //     },
    //     changeOrigin:true
    // }))
}