// Node lessons

// Lesson 2 - Baby Steps
    /**
var result = 0;
for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}

console.log(result);
     **/

// Lesson 3 - First IO
/**
var fs = require('fs');
var filename = process.argv[2];
var file = fs.readFileSync(filename);
var contents = file.toString();


console.log(contents.split('\n').length - 1);

 **/

// Lesson 4 Asyc i/o
/**
var fs = require('fs');
var filename = process.argv[2];
var file = fs.readFile(filename, callback);

function callback(err, data) {
    if (err === null)
        console.log(data.toString().split('\n').length - 1);
    else
        console.log('This is the error: ' + err);
}
 **/
/**
// Lesson 5 Filterd LS
// import the filesystem reader
var fs = require('fs');
// file name is on the third element of the array in process.argv
var filename = process.argv[2];
// The extension is on the fourth element of the array in process.argv
var extension = process.argv[3];
// RegExp helps filter our results in the array aka. pattern matching
var pattern = RegExp('.' + extension);
// the function file uses readdir associated with fs
// -- readdir info
// first argument is filename
// second argunment is function handler
// this function makes a for loop to loop through all the files
// the rest i give up fuck it
var file = fs.readdir(filename, function(err, files) {
    for (i = 0; i < files.length; i++) {
        if (pattern.test(files[i])) {
            console.log(files[i]);
        }
    }
});
// Test unit
// to see all the actual array from .argv
console.log(process.argv);
 **/

// Lesson 6 make-it-modular

var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
    if (err) {
        throw err;
    }
    else list.forEach(function (file) {
        console.log(file);
    });
});
