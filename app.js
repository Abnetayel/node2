const http = require('http');
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log("I am in the first middleware");
    next();
});


app.use((req, res, next) => {
    console.log("I am in the second middleware");
    next();
});
app.use((req, res) => {
    console.log("I am in the third middleware, responding now.");
     res.send("Hello from the server!");
});


// const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
app.listen((3000),()=>{
    console.log("server is runnig  3000");
    
})
