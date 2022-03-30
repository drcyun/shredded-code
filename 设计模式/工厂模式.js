
class Product1 {
    constructor(name) {
        this.name = name;
    }
    init() {

    }
}

class Product2 {
    constructor(name) {
        this.name = name;
    }
    init() {

    }
}

class Product3 {
    constructor(name) {
        this.name = name;
    }
    init() {

    }
}

class Factory {
    create(role) {
        switch (role) {
            case 'first':
                return new Product1(role);
                break;
            case 'second':
                return new Product2(role);
                break;
            case 'third':
                return new Product3(role);
                break;
            default:
                throw new Error('参数错误');
        }
    }
}

let factory = new Factory();
let product1 = factory.create('first');
let product2 = factory.create('second');
let product3 = factory.create('third');
console.log(product1, product2, product3)
