const mongoose = require("mongoose");

const paraSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    text:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
});

const Paragraph = mongoose.model("paragraphs", paraSchema);
module.exports = Paragraph;