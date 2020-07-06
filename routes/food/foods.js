const express = require('express');
const router = express.Router();
const Food = require("../../models/Food")
const createError = require('http-errors')

router.get('/', (req, res, next) => {
    Food.find({})
        .then((foods) => {
            res.status(200).json(foods)
        })
        .catch((error) => {
            next(createError(500))
        })
});

module.exports = router;