console.log('Hi From 1st Line..');

const fs = require('fs');

const data = fs.readFileSync('./file.txt'); // Blocks main thread 

console.log('Above content of the file is read in sync',data);

fs.readFile('./file.txt', (err, data) => {
    console.log('File content is read in asyc', data);
})

setTimeout(() => {
    console.log('I have waited for 5 secs')
},5000);

console.log('I am going to printed before the below guys which are written before me');