"use strict";
let x = +prompt("введите x");
let y = +prompt("введите y");
let c = +prompt("введите c");
let d = +prompt("введите d");

let e;

if (x * y > 3) {
    // Предположение
    let mel = Math.pow(Math.log10(x * y), c * d);
    if (mel < Math.pow(x, 3)) {
        mel = Math.pow(x, 3);
    }

    e = mel;
} else if (x * y <= 0 && x * y <= 3) {
    // Предположение
    let maxEl = c * x;
    if(maxEl < d * y) {
        maxEl = d * y;
    }

    e = x;
    if(x > maxEl) {
        e = maxEl
    }

    if(y < x) {
        e = y;
    }
} else if (x * y < 0) {
    // Предположение
     e = Math.pow(2, c * d ) - x 
}


console.log(e);