// -> Lesson 1
// console.log(new Buffer("bytewiser"));

// -> Lesson 2
var buffer = process.argv.slice(2).map(parseFloat);
console.log(new Buffer(buffer).toString('hex'));

// Test Case
// console.log(process.argv);
