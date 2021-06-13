const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
}).listen(8124, '127,0.0.1');//active event listener: the listen function creates an event, listener, that implements the http protocol
console.log('Server running at http://127.0.0.1:8124');