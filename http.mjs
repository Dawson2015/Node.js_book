import * as http from 'http'

const server = http.createServer();
server.on('request', (req, res) => {//request and response objects. request object has data from the web browser, while the response object is used to gather data to be sent in the response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello, world\n');
});
server.listen(8124, '127.0.0.1');//cause the server to start listening and arranges to dispatch an event for every request
console.log('Server running at http://127.0.0.0:8124');