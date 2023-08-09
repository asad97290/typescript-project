"use strict";
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
let fac = factorial(3);
console.log(fac);
