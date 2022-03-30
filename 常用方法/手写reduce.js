Array.prototype.myReduce = function (callback, initValue) {
    const arr = this;
    let res = initValue ? initValue : arr[0];
    let start = initValue ? 0 : 1;
    for (let i = start; i < arr.length; i++) {
        res = callback(res, arr[i]);
    }
    return res;
}

console.log([1,2,3].myReduce((s, n) => s + n, 1))
console.log([1,2,3].reduce((s, n) => s + n, 1))
