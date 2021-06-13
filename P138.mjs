import * as http from 'http';
import { Server } from 'node:http';

const server = http.createServer();
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('')
})