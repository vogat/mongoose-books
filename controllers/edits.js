const Book = require('../models/book');

module.exports = {
    edit,
    update
};

async function edit(req, res) {
    const book = await Book.findById(req.params.id);
    res.render('books/edits', { title: 'Edit Book', book });
  }
  
  async function update(req, res) {
    const { id } = req.params;
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
      await book.save();
    } catch (err) {
        console.log(err);
        res.render('books/edits', { title: 'Edit Book', book: req.body, errorMsg: err.message });
    }
    res.redirect(`/books/${updatedBook._id}`);
  }