'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let message = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  res.end(message);
}).listen(1336, '127.0.0.1');