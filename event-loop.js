
const fs = require('fs');
setTimeout(() => {
    console.log('timeout')
},1000);

process.nextTick(() => {
    console.log('tick');
    Promise.resolve('Promise').then(console.log)
});

setTimeout(() => {
    process.nextTick(() => {
        console.log('tick from timeout ');
        Promise.resolve('Promise from timeout').then(console.log)
    });
    console.log('timeout 2')
},1000);

fs.readFile('./file.txt', (err, data) => {
    console.log('File content is read in async');
    setImmediate(() => console.log('Immediate'))
    Promise.resolve('Promise from File read').then(console.log);
});
