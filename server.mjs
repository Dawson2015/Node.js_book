import * as http from 'http'
import * as util from 'util'
import * as os from 'os'
// import {sniffOn} from '../events/httpsniffer.mjs'
// import {sniffOn} from './httpsniffer.mjs'

const listenOn = 'http://localhost:8124';
const server = http.createServer();
server.on('request', (req, res) => {
    var requrl = new URL(req.url, listenOn);
    if (requrl.pathname === '/') {
        homePage(req, res)
    }
    else if (requrl.pathname === '/osinfo') {
        osInfo(req, res);
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/plain' })
        res.end('bad URL' + req.url)
    }
});

server.listen(new URL(listenOn).port)
// sniffOn(server)
console.log(`listening to ${listenOn}`)

function homePage(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })//200 means success
    res.end(//end function sends the response
        `<html> <head><title>Hello, world</title></head>
        < body > <h1>Hello,world</h1>
        <p><a href = '/osinfo'>OS Info</a></p>
        </body ></html>`);
}

function osInfo(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(
        `<html><head><title>Operating System Info</title></head>
        < body > <h1>Operating System Info</h1>
        <table>
            <tr><th>TMP Dir</th></tr>${os.tmpdir()}</td></tr >
    <tr><th>Host Name</th></tr>${ os.hostname() }</td ></tr >
    <tr><th>OS Type</th></tr>${ os.type() }${ os.platform() }
    ${os.arch()} ${os.release()}</td></tr>
    <tr><th>Uptime</th><td>${os.uptime()}
    ${util.inspect(os.loadavg())}</td></tr>
    <tr><th>Memory</th><td>total: ${os.totalmem()} free:
    ${os.freemem()}</td></tr>
    <tr><th>CPU's</th><td><pre>${util.inspect(os.cpus())}</pre></td></tr>
    <tr><th>Network</th><td><pre>${util.inspect(os.networkInterfaces())}</
    pre></td></tr>
    </table>
    </body></html>`);
}