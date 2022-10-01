const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const res = require('express/lib/response');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 5000;

// Use GZIP compression for sending files, json decoode all requests, set urlencoded to true.
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for errors
app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port);
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})