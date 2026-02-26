const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Azure Pipeline!");
}).listen(3000);
