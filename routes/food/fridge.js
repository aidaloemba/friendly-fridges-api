const express = require('express');
const router = express.Router();
const Food = require("../../models/Food");
const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res, next) => {
    debugger
    if(!req.session.currentUser) next(createError(403))
    else {
    Food.find({owner: req.session.currentUser._id})
        .populate("owner")
        .then((foods) => {
            res.json(foods)
        })
        .catch((error) => {
            next(createError(500))
        })
    }
});

router.get("/delete/:id", (req,res,next)=> {
    if(!ObjectId.isValid(req.params.id)) next(createError(400, "This is not in your fridge!"));
    Food
        .findById(req.params.id)
        .then((food)=> {
            if(!food) return next(createError(404, "This food has been eaten."));
            else if((food && food.owner) && (food.owner.toString() !== req.session.currentUser.id)) next(createError(403, "This is not your food, you can't delete it!"));
        })
        .then((food)=> {
            res.status(205).json(food);
        })
        .catch((err)=> {
            next(createError(500, "Error"));
        })
})

module.exports = router;