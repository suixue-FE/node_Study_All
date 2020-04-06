const { promisify } = require('util')
const figlet = promisify(require('figlet')) //
const clear = promisify(require('clear')) // 清空输入
const chalk = promisify(require('chalk')) // log日志变色
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')

module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('LVueAuto Welcome!')
    log(data)
    // 克隆项目（下载）
    await clone('github:su37josephxia/vue-template', name)

    // 安装依赖
    log('安装依赖....')
    await spawn('cnpm', ['install'], { cwd: `./${name}` })

    log(
        `
        👌
        ===========
        依赖安装完成
        ===========

        `
    )
}


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