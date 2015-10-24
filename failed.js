var http = require('http');
var url = process.argv[2];

http.get(url,function(request){
    var data = [];
    request.setEncoding("utf8");
    request.on('data', function(data){
        data.push();
    });
    request.on('end', function() {
        console.log(data.join('').length);
        console.log(data.join(''));
    });
    request.on('error',console.error);
});
    