let fs = require('fs');
let locateFile = process.argv[2];
let extension = process.argv[3];

fs.readdir(locateFile, filterLS);

function filterLS(err, data) {
  if (err)
    console.log(err);
  else {
    data.forEach(function (file) {
      // pop returns the last item in the array
			var ext = file.split('.').pop();
			if (ext === extension && file.length > 2)
      	console.log(file);
    });
  }
}

// Suggested Way
/*
var fs = require('fs')  
var path = require('path')  

var folder = process.argv[2]  
var ext = '.' + process.argv[3]  

fs.readdir(folder, function (err, files) {  
  if (err) return console.error(err)  
  files.forEach(function(file) {  
    if (path.extname(file) === ext) {  
      console.log(file)  
    }  
  })  
})  
*/
