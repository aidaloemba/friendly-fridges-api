const mongoose = require('mongoose');
const default_image_url = "./images/RA3GKG.jpg";

module.exports = mongoose.model('User', {
    profilePicture: {
        type: String,
        default: default_image_url
      },
    profilePicturePath: {
        type: String
      },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    postcode: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
      }]
}, 'users');