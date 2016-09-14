// Notes
// /usr/local/lib/node_modules/

// Dependencies
let http = require('http');
let bl = require('bl');
let results = [];
let count = 0;

function printResults () {
  // loop
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
    }))
  });
}
