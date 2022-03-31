function myInterval(cb, delay) {
    const fn = () => {
        cb();
        setTimeout(fn, delay);
    }
    setTimeout(fn, delay);
}

myInterval(() => {
    console.log(new Date());
},1000)
