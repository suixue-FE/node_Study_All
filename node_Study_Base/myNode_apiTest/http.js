const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
    // console.log('there is a request');
    // console.log('response',getPrototypeChain(response));
    const { url, method, headers } = request
    console.log('url', url);
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html',(err,data)=>{
            if(err){
                response.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                response.end('500 服务器错误')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }else if(url === '/users' && method === 'GET'){
        response.writeHead(200,{'content-Type':'application/json'})
        response.end(JSON.stringify([{name:'Tom'}]))
    }else if(method === 'GET'&& headers.accept.indexOf('image/*')!==-1){
        // 图片很大，一般用流，省内存
        fs.createReadStream('.'+url).pipe(response)
    }

    // response.end('hello node') // 因为他是一个流，.end是流的操作
})
    .listen(3001)

// 65535个端口 8000以后随便用

// 控制台发现 console.log('there is a request'); 执行两次
// 是因为浏览器有时会请求favicon.ico


// 打印原型链
let getPrototypeChain = (obj) => {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}