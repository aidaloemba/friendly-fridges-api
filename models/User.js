const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    path: String,
    originalFileName: String
})
const userSchema = new Schema({
    profilePicture: profileSchema,
    username: {
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
        required: [true, "Email is required."],
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
      }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;