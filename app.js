const http = require('http');  // Retaining this line since it's present in one version
const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
    console.log("I am in the first middleware");
    next();
});

// Second middleware
app.use((req, res, next) => {
    console.log("I am in the second middleware");
    next();
});

// Third middleware, responds to the client
app.use((req, res) => {
    console.log("I am in the third middleware, responding now.");
    res.send("Hello from the server!");
});

// Creating and starting the server
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
