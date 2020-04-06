const { callBack } =  require ('../index')
test('callBack',done=>{
    callBack()
    // 延迟1s结束
    setTimeout(()=>{
        done()
    },1000)  
})