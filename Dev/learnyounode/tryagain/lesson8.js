// Dependencies and Variables
// npm install bl = buffer list (tools)
let http = require('http');
let bl = require('bl');
let info = process.argv[2];

// bl uses get request
// first argument is the whole data response
// second argument anon function next action??
// from test it seems to be sending an object Object??
http.get(info, function (response) {
  // The anon function takes the response parameter
  // Test cases
  //console.log("This is a response: " + response);
  // console.log("This is info: " + info);

  // Anyway
  // response object is creates a .pipe
  // pipe does?? associated with buffer list aka bl
  // bl then takes an error and then data
	response.pipe(bl(function (err, data) {
  	if (err)
      return console.error(err);
    // manipulate the data accordingly
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

// Test case
//console.log(info);
