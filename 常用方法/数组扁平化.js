function flat(arr) {
    return arr.reduce((s, n) => {
        if (n instanceof Array) {
            return s.concat(flat(n))
        }
        return s.concat(n);
    }, [])
}

console.log(flat([1,2,[1,2,[1,2]]]))
