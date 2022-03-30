/**
 * @file sleep函数
 */

function sleep(callback, wait) {
    let start = Date.now();
    while (Date.now() - start < wait) {}
    callback();
}
