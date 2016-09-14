var http = require('http');
// test unit
//console.log(process.argv);

// This is were the url is stored in process.argv[2]
var url = process.argv[2];

// .get is similar to request but don't need req.end()
// typicall .get first argument is the url
// second is the function that takes the request
// the request in this situation is the payload of information aka the array string
http.get(url, function(request) {

    // usefull to output a string
    // otherwise it might come out like blaaaa
    request.setEncoding('utf8');

    // more info in doc
    // request.on listens to either 'data', 'error', 'end'
    // in this case we are listening to the data stream of the object
    // from there we can send data to the function which outputs all the collected data
    request.on('data', function(data) {
        console.log(data);
    });

});
