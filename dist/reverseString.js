"use strict";
function solve(arr) {
    let len = arr === null || arr === void 0 ? void 0 : arr.length;
    if (len == 1) {
        return [arr[0]];
    }
    return [arr[len - 1]].concat(solve(arr.slice(0, len - 1)));
}
let str = "hello";
let num = [1, 2, 3, 4];
console.log(str);
console.log(num);
console.log(solve(Array.from(str)).join(''));
console.log(solve(num));
