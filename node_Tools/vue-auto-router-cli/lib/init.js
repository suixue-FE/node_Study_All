const {promisify} = require('util')
const figlet = promisify(require('figlet')) //
const clear = promisify(require('clear')) // 清空输入
const chalk = promisify(require('chalk')) // log日志变色
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')

module.exports = async name =>{
    // 打印欢迎界面
    clear()
    const data = await figlet('LVueAuto Welcome!')
    log(data)
    // 克隆项目（下载）
    await clone('github:su37josephxia/vue-template',name)
}