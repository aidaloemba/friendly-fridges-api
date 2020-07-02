const express = require('express');
const app = express();

app.get('/', (req, res) => {

    let data = {}
    res.json('foods', data)
});

module.exports = app;