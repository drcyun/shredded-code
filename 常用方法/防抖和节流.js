/**
 * @file 防抖和节流
 */

/**
 * @desc 防抖
 * @param {function} callback
 * @param delay
 * @return {function(): void}
 */
function debounce(callback, delay) {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback.call(this);
        }, delay)
    }
}

/**
 * @desc 节流
 * @param callback
 * @param delay
 * @return {function(): void}
 */
function throttle(callback, delay) {
    let flag = true;
    return () => {
        if (flag === true) {
            setTimeout(() => {
                callback.call(this);
                flag = true;
            }, delay);
        }
        flag = false;
    }
}

