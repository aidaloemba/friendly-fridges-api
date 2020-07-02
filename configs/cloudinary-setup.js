const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

let storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: `foods-${process.env.ENVIRONMENT}`, // The name of the folder in cloudinary
  
   // public_id: (req,file)=>{debugger}
  },
  allowedFormats: ['jpg', 'png'],
});

module.exports =  multer({ storage});
module.exports.cloudinary = cloudinary;
