function exeOnce(func) {
    let result;
    return (...arg) => {
        if (result) return result;
        result = func(...arg);
        return result;
    }
}

const test = () => {console.log('call'); return 3;}
const f1 = once(test);
f1();
f1();
