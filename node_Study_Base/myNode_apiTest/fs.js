const fs = require('fs')
// 异步方式
fs.readFile('download.js',(err,data)=>{
    if(err) throw err
    console.log(data);
    
})

// 同步调用

const data = fs.readFileSync('./download.js')

console.log('data',data.toString());


// buffer 对象是为了操作二进制对象而存在的例如：上传图片转base64