// Import the required modules
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the HTTP header with status code 200 (OK) and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body
  res.end('Hello, World!\n');
});

// Start listening on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
