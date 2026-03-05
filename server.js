const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Azure Pipeline v2!");
}).listen(3000);
