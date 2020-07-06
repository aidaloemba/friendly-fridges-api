const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    profilePicture: {
        type: String,
        default: "./images/RA3GKG.jpg"
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
    }
}, 'users');