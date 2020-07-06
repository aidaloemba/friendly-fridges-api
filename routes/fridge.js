const express = require('express');
const router = express.Router();
const Food = require("../models/Food")
const createError = require('http-errors')

router.get('/', (req, res, next) => {
    Food.find({owner: req.session.currentUser._id})
        .then((foods) => {
            res.json(foods)
        })
        .catch((error) => {
            next(createError(500))
        })
});

module.exports = router;