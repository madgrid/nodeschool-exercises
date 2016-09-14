// import libraries
var bl = require('bl');
var http = require('http');

// variables
var results = [];
var count = 0;

// make the array of the three servers we are collecting data from
function printResults() {
    for(var i = 0; i < 3; i++)
        console.log(results[i]);
}

// httpGet collects the information from the servers and sends it to the results array
// uses .get to get the process and uses index to count up the array to to obtain the others
// we then send that response to a function that calls pipe
// that pipe calls the bit list and determines an error or sends that result to the results array

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                results[index] = data.toString();
                count++;

                if (count == 3) {
                    printResults();
                }
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}

// Test unit
//console.log(process.argv);
