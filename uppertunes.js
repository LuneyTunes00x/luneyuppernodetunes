var http = require('http');
var cool = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(cool.upperCase("Loading...2023"));
    res.end();
}).listen(3000);