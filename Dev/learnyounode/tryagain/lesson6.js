let mymodule = require('./mymodule.js');
let dir = process.argv[2];
let filterStr = process.argv[3];

// use the file( process2, process3, anon function(err, data))
// wtf???
mymodule(dir, filterStr, function (err, list) {
  // check for errors
  if (err)
    return console.error('There was an error', err);
	// Loop through the file?
  // For each list item return console.log
  list.forEach(function (file) {
    return console.log(file);
  });
});

// Questions
// how this sending data to mymodule?
// or is mymodule sending data to lesson6.js?
// 
