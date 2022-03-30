class MyPromise {

    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }

    }
    status = MyPromise.PENDING;
    value = null;
    reason = null;
    onResolveCallbacks = [];
    onRejectedCallbacks = [];

    resolve = (value) => {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.FULFILLED;
            this.value = value;
            this.onResolveCallbacks.forEach(fn => fn());
        }
    }

    reject = (reason) => {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn());
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === MyPromise.FULFILLED) {
            onFulfilled(this.value);
        } else if (this.status === MyPromise.REJECTED) {
            onRejected(this.reason);
        } else {
            this.onResolveCallbacks.push(() => {
                onFulfilled(this.value);
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }

}

//
// let p = new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve(0);
//     }, 1000)
// })
// p.then(res => {
//     console.log(res);
// })
// p.then(res => {
//     console.log(res);
// })


function myAll(arr) {
    return new Promise((resolve, reject) => {
        let len = arr.length;
        let count = 0;
        let result = [];
        if (!arr.length) {
            return new Promise.resolve(arr);
        }
        for (let i = 0; i < len; i++) {
            arr[i].then(res => {
                result.push(res);
                count++;
                if (count === len) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

function myRace(arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        }
    })
}

function myAllSettled(arr) {
    return new Promise((resolve, reject) => {
        let len = arr.length;
        let count = 0;
        let result = [];
        if (!arr.length) {
            return new Promise.resolve(arr);
        }
        for (let i = 0; i < len; i++) {
            arr[i].then(
                res => {
                    result.push({
                        status: 'fulfilled',
                        value: res
                    })
                    count++;
                    if (count === len) {
                        resolve(result);
                    }
                },
                err => {
                    result.push({
                        status: 'rejected',
                        value: err
                    })
                    count++;
                    if (count === len) {
                        resolve(result);
                    }
                }
            )
        }
    })
}

let p1 = new Promise((res,rej) => {
    setTimeout(()=>{
        res("p1调用成功")
    },500)
})

//p2: 直接转化为res状态
let p2 = new Promise((res,rej) => {
    res("p2调用成功")
})

// p3: 1s后转化为rejected状态
let p3 = new Promise((res,rej) => {
    setTimeout(()=>{
        rej("p3失败了...")
    },400)
})

//p4: 2s后转化为rejected状态
// let p4 = new Promise((res,rej) => {
//     setTimeout(()=>{
//         rej("p4失败了...")
//     },2000)
// })

// myRace([p3, p1]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

myAllSettled([p1,p3]).then(res => {
    console.log(res);
})
