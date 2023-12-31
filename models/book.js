const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
}, {
    timestamps: true
})

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String},
    year: {
        type: Number
    },
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Book', bookSchema);