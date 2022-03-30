class Observer {
    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    removeSub(sub) {
        if (!this.subs.includes(sub)) {
            console.log('不存在该观察者' + sub.name);
            return;
        }
        this.subs.filter((val, index, arr) => {
            return sub != val;
        })
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }

}

class Watcher {
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(this.name + ',我需要更新')
    }
}

const observer = new Observer();
const watch1 = new Watcher('zhangsan');
const watch2 = new Watcher('lisi');
const watch3 = new Watcher('wangwu');

observer.addSub(watch1);
observer.addSub(watch2);

observer.notify();
observer.removeSub(watch3);
