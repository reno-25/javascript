
const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

// Untuk memberikan nilai pada properti process.env, kita dapat memberikannya ketika mengeksekusi berkas JavaScript. Caranya seperti ini:
// SET NODE_ENV=production && node app.js