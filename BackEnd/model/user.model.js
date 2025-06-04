const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [3,"Username must be at least 3 characters long"],
        maxlength: [30,"Username cannot exeed 30 characters"]
    },
    password:{
        type: String,
        required: true,
        minlength: [6, "Password must atleast be 6 characters long"]
         
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        
    }
},{timestamps: true});

const User = mongoose.model("userprofile", userSchema);
module.exports = User;