// 内置模块
const os = require('os')
const totalmem = os.totalmem()
const freemem = os.freemem()

console.log(`内存占用率${(1-freemem / totalmem).toFixed(2)}%`)