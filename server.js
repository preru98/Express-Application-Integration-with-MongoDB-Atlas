const http = require('http');
const app =  require('./app');

const server = http.createServer(app);

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, port, () => {
    console.log(`RFID Tracking Server Up and Running at http://${hostname}:${port}`);
});
