const express = require('express');
const router = express.Router();
// const { authenticateUser } = require('../middleware/authentication');

const {
  createGame,
  getAllGames,
  updateGame,
  deleteGame,
  getSingleGame,
} = require('../controllers/gameController');

router.route('/').post( createGame).get(getAllGames);

router
  .route('/:id')
  .get(getSingleGame)
  .patch(updateGame)
  .delete(deleteGame);

module.exports = router;
