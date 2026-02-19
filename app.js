var { calculateSum, hello } = require('./sum.js');
// import { calculateSum, hello } from './sum';

var multiply = require('./multiply');
// import { multiply } from './multiply.mjs';
var a = 20;
var b = 30;

var jaashu = 'Jaashwini';

console.log(jaashu);
// console.log(a+b);
// console.log(global.setImmediate);
calculateSum(a,b);
// multiply(a,b);
console.log(hello);
