const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    tite: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String},
    year: {type: Number,
        default: function() {
            return new Date().getFullYear();
          },},
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});