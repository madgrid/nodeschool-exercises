// had issues with bl -
// Need to go back and comment look at the man
var concat = require('concat-stream');
var http = require('http');
var url = process.argv[2];

http.get(url, function(req){
    req.setEncoding('utf8');
    var sink = concat(function(data){
        if (data !== null) {
            console.log(data.split('').length);
            console.log(data);
        }
        else
            console.log("Null Value: " + data);
    });

    req.pipe(sink);
});
