
const fs = require('fs');
setTimeout(() => {
    console.log('timeout')
},0);

process.nextTick(() => {
    console.log('tick');
    Promise.resolve('Promise').then(console.log)
});

fs.readFile('./file.txt', (err, data) => {
    console.log('File content is read in asyc');
    setImmediate(() => console.log('Immediate'))
    Promise.resolve('Promise from File read').then(console.log);
});
