// console.log('beep boop');
/**
var fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
 **/

//process.stdin.pipe(process.stdout);
/**
var through = require('through2');
var stream = through(write, end);

function write (buffer, encoding, next) {
    // is called for every buffer of avaible input
    // this.push('I got some data: ' + buffer.toString() + '\n');
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    // is called when there is no more data
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);
 **/

var split = require('split');
var through = require('through2');
process.stdin
    .pipe(split())
    .pipe(through(function (line, _, next) {
        if (lineNum )
    console.dir(line.toString());
    next();
    }));
