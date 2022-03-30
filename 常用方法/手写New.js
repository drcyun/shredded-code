function newOperation (Func, ...arg) {
    const obj = Object.create(Func.prototype);
    Func.call(obj,...arg);
    return obj;
}
