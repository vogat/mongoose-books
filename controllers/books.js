const Book = require('../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    update
};

async function index(req, res) {
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books', books });
  }
  
  async function show(req, res) {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { title: 'Book Details', book });
  }
  
  function newBook(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('books/new', { title: 'Add Book', errorMsg: '' });
  }
  
  async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Book.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/books');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('books/new', { errorMsg: err.message });
    }
  }