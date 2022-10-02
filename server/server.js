const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const res = require('express/lib/response');
const compression = require('compression');
const Database = require('./utils/Database/Database');
const app = express();
const port = 5000;

Database.init();


// Use GZIP compression for sending files, json decode all requests, set urlencoded to true.
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for errors
app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port);
})

// Test get
app.get('/monkey.png', (req, res) => {
    //   res.send('Hello World!');
    res.sendFile(__dirname + "/deez.txt");
    const date = new Date();
    console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: Requester's IP:`, req.ip);
    
})

// Test database retrieval
app.get('/database', (req, res) => {
    res.sendFile(__dirname + "/deez.txt");
    const date = new Date();
    console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: Requester's IP:`, req.ip);
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})