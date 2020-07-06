const mongoose = require('mongoose');
const default_image_url = "./images/default-img-food.gif";
const user_postcode = "postcode";

module.exports = mongoose.model('Food', {
    photo: {
        type: String,
        default: default_image_url
    },
    // photoPath: {
    //     type: String
    //   },
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    category: {
        type: String,
        required: [true, 'Category is mandatory']
    },
    description: {
        type: String,
        required: [true, 'Description is mandatory']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    location: {
        type: String,
        default: user_postcode
    }
}, 'foods');