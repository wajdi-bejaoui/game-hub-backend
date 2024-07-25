const express = require('express');
const router = express.Router();
// const { authenticateUser } = require('../middleware/authentication');

const {
  createPlatform,
  getAllPlatforms,
  updatePlatform,
  deletePlatform,
  getSinglePlatform,
} = require('../controllers/platformController');

router.route('/').post( createPlatform).get(getAllPlatforms);

router
  .route('/:id')
  .get(getSinglePlatform)
  .patch(updatePlatform)
  .delete(deletePlatform);

module.exports = router;
