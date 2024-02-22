// create web server
// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header (status code and content type)
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write the response body
    res.write('Hello World!');

    // End the response
    res.end();
});

// Listen on port 8080
server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});
