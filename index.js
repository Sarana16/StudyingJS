'use strict';

let x = +prompt("введите x...");
let y = +prompt("введите y...");

let c = (1)/(2*Math.PI)-x*Math.sqrt(2.5*Math.pow(10,3)*y)*Math.abs(Math.cos(Math.pow(x,3)));

console.log(c);
