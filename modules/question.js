const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: option
    }]

}, { timestamps: true });


const Question = mongoose.model('Question', questionSchema);
module.exports = Question;