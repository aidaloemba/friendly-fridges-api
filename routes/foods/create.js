const express = require('express');
const Food = require('../../models/Food');
const app = express();
//const uploader = require('../../configs/cloudinary-setup')
//const cloudinaryImgUploadRollback = require('../../middleware/cloudinaryImgUploadRollback');
// const multer = require("multer");
// const uploader = multer({dest: 'uploads/'})

app.post("/", (req,res, next)=> {
  if(req.session.user) req.body.owner = req.session.user.id;
  Food.create(req.body)
      .then((food)=> res.status(200).json(food))
      .catch(async (error)=> {            
       res.status(500).json({message: error})
    })
})

module.exports = app;