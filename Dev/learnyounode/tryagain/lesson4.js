let fs = require('fs');

let countLines = function(err, fileBuff) {
  // console.log('fileBuff');
  if (err === null)
  	console.log(fileBuff.split('\n').length - 1);
  else
    console.log(err);
};

fs.readFile(process.argv[2], 'utf8', countLines);
