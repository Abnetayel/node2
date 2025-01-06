const http = require('http')
const express = require('express')
const app = express(); 
app.use((req,res,next)=>{
    console.log(" i am in the mddelware");
    next()
})
app.use((req,res,next)=>{
    console.log("second middelware1");
    
})
const server= http.createServer(app)
server.listen((3000),()=>{
    console.log("server is renning in port 3000");
})