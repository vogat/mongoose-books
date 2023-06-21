const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /movies/:id/reviews (create review for a movie)
router.post('/books/:id/reviews', reviewsCtrl.create);

// DELETE
router.delete('/books/:id/reviews', reviewsCtrl.delete);

module.exports = router;