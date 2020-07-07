const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;