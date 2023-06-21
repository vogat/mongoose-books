var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

//GET /books
router.get('/', booksCtrl.index);

//Get /books/new
router.get('/new', booksCtrl.new);

//GET /books/:id
router.get('/:id', booksCtrl.show);

//POST /books
router.post('/', booksCtrl.create);

//DELETE
router.post('/:id', booksCtrl.delete)



module.exports = router;
