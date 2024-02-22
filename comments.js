// Import required modules
const express = require('express');

// Create an instance of express
const app = express();
const port = 3000; // Choose any port number you prefer

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Respond with 'Hello, World!' for requests to the root URL
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});