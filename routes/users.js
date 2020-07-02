const express = require('express');
const app = express();

app.get('/', (req, res) => {

    let data = {}
    res.json('users', data)
});

module.exports = app;