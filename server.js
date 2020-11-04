
var http = require('http');

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

var port = 5000;
var host = 'localhost';

server.listen(port, host, function() {
    console.log('server running at http://' + host + ':' + port + '/');
})
