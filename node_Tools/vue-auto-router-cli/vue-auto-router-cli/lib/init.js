const { promisify } = require('util')
const figlet = promisify(require('figlet')) //
const clear = promisify(require('clear')) // 清空输入
const chalk = promisify(require('chalk')) // log日志变色
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
const open = require('open')
function spawn(...args) {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stdout.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}

module.exports = async name => {
    // 打印欢迎画面
    clear()
    const data = await figlet('KKB Welcome')
    log(data)
    // 创建项目
    log(`🚀创建项目:` + name)
    // 克隆代码
    await clone('github:su37josephxia/vue-template', name)
    log('正在安装依赖...')
    await spawn('cnpm', ['install'], { cwd: `./${name}`,shell:true })
    log(`
👌安装完成：
To get Start:
===========================
    cd ${name}
    npm run dev
===========================
            `)

    // 打开浏览器
   open('http://localhost:8080')
   await spawn('npm', ['run','serve'], { cwd: `./${name}`,shell:true })        
}

