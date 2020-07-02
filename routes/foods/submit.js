const express = require('express');

const Food = require('../../models/Food');

const app = express();
const uploader = require('../../configs/cloudinary-setup')
const cloudinaryImgUploadRollback = require('../../middleware/cloudinaryImgUploadRollback');

app.post("/", uploader.single("photo"), (req,res, next)=> {
  if(req.session.user) req.body.owner = req.session.user.id;
  if(req.file) req.body.photoPath = req.file.photoPath;
  debugger
  console.log("hi reached")
  Food.create(req.body)
      .then((food)=> res.status(200).json(food))
      .catch(async (error)=> {            
        if(req.file) await cloudinaryImgUploadRollback(req.file.public_id);
        next(createError(400, error.message));
    })
})

module.exports = app;