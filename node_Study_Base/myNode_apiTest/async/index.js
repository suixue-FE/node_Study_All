const logTime =(name)=>{
    console.log(`log...${name} ${new Date().toLocaleDateString()}`);
}

let callBack = ()=>{
    setTimeout(()=>{
        logTime('callBack 1')
        setTimeout(()=>{
            logTime('callBack 2')
            setTimeout(()=>{
                logTime('callBack 3')
            },100)
        },100)
    },100)
}
// callBack()


const promise = (name,delay=100)=>new Promise(resolve=>{
    setTimeout(()=>{
        logTime(name)
        resolve()
    },delay)
})

let PromiseTest = ()=>{
    promise('Promise 1')
    .then(promise('Promise 2'))
    .then(promise('Promise 3'))
} 

// PromiseTest()

let generator = () =>{
    const generator = function* (name){
        yield promise(name + 1)
        yield promise(name + 2)
        yield promise(name + 3)
    }
    let co = generator =>{
        if(it = generator.next().value){
            it.then(res=>{
                co(generator)
            })
        }else{
            return
        }
    }

    co(generator('co-generator'))
}
// generator()

// async/await
let asyncAwait = async() =>{
    await promise('async/await 1') 
    await promise('async/await 2')
    await promise('async/await 3')
    promise('async/await 4')
}
// asyncAwait()

let eventFun = async()=>{
    const asyncFun = name => event =>{
        setTimeout(()=>{
            logTime(name)
            event.emit('end')
        },100)
        return event
    }

    const ary = [
        asyncFun('event 1'),
        asyncFun('event 2'),
        asyncFun('event 3')
    ]
   
    
    const {EventEmitter} = require('events')
    const event = new EventEmitter()
    let i = 0
    event.on('end',()=> i<ary.length && ary[i++](event))
    event.emit('end')
}

eventFun()