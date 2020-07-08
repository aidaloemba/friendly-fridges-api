const mongoose = require('mongoose');
const default_image_url = "./images/default-img-food.gif";
const default_postcode = "1012AB";
const User = mongoose.model('User');
module.exports = mongoose.model('Food', {
    photo: {
        type: String,
        default: default_image_url
    },
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    category: {
        type: String,
        required: [true, 'Category is mandatory']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    location: {
        type: String,
        default: default_postcode
    }
}, 'foods');