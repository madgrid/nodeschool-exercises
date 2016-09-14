let fs = require('fs');

let buffer = process.argv;
let final = fs.readFileSync(buffer[2]);

console.log(final.toString().split('\n').length - 1);

