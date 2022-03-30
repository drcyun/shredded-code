Array.prototype.myMap = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error('It must be an Array');
    }
    if (typeof callback !== 'function') {
        throw new Error('callback must be a function');
    }
    let result = [];
    let len = this.length;
    if (!len) return result;
    for (let i = 0; i < len; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

let arr1 = [1,2,2,3].myMap((x) => x + 1);
console.log(arr1);
