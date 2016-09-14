
// Test Case
//console.log(process.argv);

// Notes
/*
 Also be aware that all elements of process.argv are strings and you may  
 need to coerce them into numbers. You can do this by prefixing the  
 property with + or passing it to Number(). e.g. +process.argv[2] or  
 Number(process.argv[2]).  
 */

var result = process.argv;
var final = 0;

for (var i = 2; i < result.length; i++) {
  final += Number(result[i]);
}

console.log(final);
