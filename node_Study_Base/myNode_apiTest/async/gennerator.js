// Gennerator函数

function* func(){
    console.log('one');
    yield '1'   // 噎住，暂停，执行next走到这里
    console.log('two');
    yield '2'
    console.log('three');
    yield '3'
}

const f = func()
// console.log('next',f.next());
// console.log('next',f.next());
// console.log('next',f.next());
// console.log('next',f.next());
for(const [key,value] of func()){
    console.log(key,':',value);
}

// 加入在yield中是一个promise，那是不是就能把一组异步进行串行操作了呢
// index中有实践