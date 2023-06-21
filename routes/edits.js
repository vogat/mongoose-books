var express = require('express');
var router = express.Router();

const editsCtrl = require('../controllers/edits');

// GET /books/:id/edit
router.get('/books/:id/edits', editsCtrl.edit);

// PUT /books/:id
router.put('/books/:id', editsCtrl.update);

module.exports = router;