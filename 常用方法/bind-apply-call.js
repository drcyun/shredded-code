/**
 * @file 改变this指向
 */

Function.prototype.myCall = function (context = global, ...args) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    let func = Symbol();
    context[func] = this;
    let result = context[func](...args);
    delete context[func];
    return result;
}

Function.prototype.myApply = function (context = global, args) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    let func = Symbol();
    context[func] = this;
    let result;
    if (!args) {
        result = context[func]();
    } else {
        result = context[func](...args);
    }
    delete context[func];
    return result;
}

Function.prototype.myBind = function (context = global, ...args) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    const fn = this;
    function bound(...rest) {
        fn.apply(context, [...args,...rest]);
    }
    return bound;
}

Function.prototype.mySoftBind = function (context = global, ...args) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    const fn = this;
    function bound(...rest) {
        context = !this || this === global ? context : this;
        return fn.myApply(context, [...args, ...rest]);
    }
    return bound;
}



