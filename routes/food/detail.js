const express = require('express');
const router = express.Router();
const Food = require('../../models/Food');
const createError = require('http-errors');

router.get('/', (req,res, next)=> {
    debugger
    Food.findById(req.params.id)
      .then((food)=> {
        if(!food) next(createError(404));
        else res.status(200).json(food);
      })
      .catch((error)=> {
        if(error.name === "CastError") next(createError(404)); //invalid foodId
        else next(createError(500));
      })
})

module.exports = router;
