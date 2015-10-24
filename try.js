var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];

function printResponseData(urls, n){
    if (n > urls.length-1){
        return;
    }
    http.get(urls[n], function(res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
            console.log(body.toString());
            printResponseData(urls, n+1);
      });
    }); 
}
printResponseData(urls, 0);
