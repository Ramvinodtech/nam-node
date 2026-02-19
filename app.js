const {calculateSum, multiply} = require('./calculate');
// const { calculateSum } = require('./calculate/sum.js');
// import { calculateSum, hello } from './calculate/sum.js';

// const {multiply} = require('./calculate/multiply.js');
// import { multiply } from './multiply.js';
var a = 20;
var b = 30;
var jaashu = 'Jaashwini';

console.log(jaashu);
// console.log(a+b);
// console.log(global.setImmediate);
calculateSum(a,b);
multiply(a,b);
// multiply(a,b);

console.log(globalThis === global);
