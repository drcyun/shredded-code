function myInstanceOf(source, target) {
    let left = source.__proto__;
    let right = target.prototype;
    while (1) {
        if (left === null) {
            return false;
        }
        if (left === right) {
            return true;
        }
        left = left.__proto__;
    }
}

