// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 8001;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});