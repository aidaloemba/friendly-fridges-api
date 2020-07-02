const mongoose = require('mongoose');

module.exports = mongoose.model('Food', {
    photo: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    photoPath: {
        type: String
      },
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
    submissionDate: {
        type: Date
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.ObjectId, ref: 'user'
    }
}, 'foods');