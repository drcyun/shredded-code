function deepClone(origin, target = {}) {
    const toStr = Object.prototype.toString;
    const arrStr = '[object Array]';

    for (let prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== null && typeof(origin[prop]) === 'object') {
                if (toStr.call(origin[prop]) === arrStr) {
                    target[prop] = [];
                } else {
                    target[prop] = {};
                }
                deepClone(origin[prop], target[prop])
            } else {
                target[prop] = origin[prop]
            }
        }
    }
    return target;
}
