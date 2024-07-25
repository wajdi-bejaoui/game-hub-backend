const express = require('express');
const router = express.Router();
// const { authenticateUser } = require('../middleware/authentication');

const {
  createGenre,
  getAllGenres,
  updateGenre,
  deleteGenre,
  getSingleGenre,
} = require('../controllers/genrecontroller');

router.route('/').post( createGenre).get(getAllGenres);

router
  .route('/:id')
  .get(getSingleGenre)
  .patch(updateGenre)
  .delete(deleteGenre);

module.exports = router;
