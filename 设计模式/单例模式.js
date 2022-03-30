class SingleInstance {

    static instance = null;

    constructor(props) {
        if (!SingleInstance.instance) {
            this.name = props;
            SingleInstance.instance = this;
        }
        return SingleInstance.instance;
    }

    static getInstance(props) {
        if (!this.instance) {
            return this.instance = new SingleInstance(props);
        }
        return this.instance;
    }
}

let single1 = new SingleInstance('zhangsan');
let single2 = SingleInstance.getInstance('zhangsan');
console.log(single1, single2);
console.log(single1 === single2);
