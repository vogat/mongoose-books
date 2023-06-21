var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

//GET /books
router.get('/', booksCtrl.index);

//Get /books/new
router.get('/new', booksCtrl.new);

// GET /books/:id/edit
router.get('/:id/edits', booksCtrl.edit);

// PUT /books/:id
router.put('/:id', booksCtrl.update);

//GET /books/:id
router.get('/:id', booksCtrl.show);

//POST /books
router.post('/', booksCtrl.create);


//DELETE
router.delete('/:id', booksCtrl.delete)



module.exports = router;
