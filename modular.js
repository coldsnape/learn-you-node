var lslib = require('./lslib');

var dir = process.argv[2];
var ext = process.argv[3];
lslib  (dir, ext, function(err, files){
    for (i=0;i<files.length;i++){
        console.log(files[i]);
    }
});