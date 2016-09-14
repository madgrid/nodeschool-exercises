//Libraries
var fs = require('fs');

// module exports specific function
// possible test this outside of this scope

module.exports = function(dirname, filter, callback) {
    // regexp filers the process.argv
    var regex = new RegExp('\\.' + filter + '$');

    // alternative
    // var filelist = new Array();
    var filelist = [];
    // used for a homemade for loop
    var i = 0;

    // Uses readdir
    // takes dirrname and function
    // function takes err and list?
    // list might possible the array?
    fs.readdir(dirname, function (err, list) {
        // called if error occurs
        if (err) {
            return callback(err);
        }
        // list = is from the parent function
        // forEach every file
        // file = arbritary name for each object in file
        else list.forEach(function (file) {
            // file i beleve is an object of the array
            // while regex calls regexp and filters the object of the array?
            if (regex.test(file))
                // for each file that is filtered it is sent to the filelist
                filelist[i] = file;
            i += 1;
        });
        // this is the condition when object is null it returns the collected filelist array
        return callback(null, filelist);

    });

};
