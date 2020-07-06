const express = require('express');
const Food = require('../../models/Food');
const app = express();

app.post("/", (req,res, next)=> {
  
  if(req.session.currentUser) req.body.owner = req.session.currentUser._id;
  Food.create(req.body)
      .then((food)=> res.status(200).json(food))
      .catch(async (error)=> {            
       res.status(500).json({message: error})
    })
})

module.exports = app;