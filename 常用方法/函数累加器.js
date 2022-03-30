
function add(arr) {
    return arr.reduce((s,n) => {
        return s+n;
    }, 0)
}

function curry(fn) {
    let args = [];
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [...args, ...newArgs];
            return temp;
        } else {
            return fn(args);
        }
    }
}


let curryAdd = curry(add)

// 测试
console.log(curryAdd(1)(2)(3)()) // 6
console.log(curryAdd(1, 2, 3)(4)()) // 10;
console.log(curryAdd(1)(2)(3)(4)(5)()) // 15;
console.log(curryAdd(1)(2)(3)(4)(10, 20)())
