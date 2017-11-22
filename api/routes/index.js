const express = require('express');
const router = express.Router();

const ctrlHotels = require('../controllers/hotels.controllers.js');
const ctrlReviews = require('../controllers/reviews.controllers.js');

router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll)
  .post(ctrlHotels.hotelsAddOne);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne);

  // ***** Review routes ******

router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll)
  .post(ctrlReviews.reviewsAddOne);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne);


module.exports = router;
