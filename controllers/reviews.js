const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteReview
};

async function create(req, res) {
    const book = await Book.findById(req.params.id);
    book.reviews.push(req.body);
    try {
        await book.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/books/${book._id}`);
}

async function deleteReview(req, res) {
    const book = await Book.findById(req.params.id);
    book.reviews.deleteOne(req.body._id);
    res.redirect(`/books/${book._id}`)
}