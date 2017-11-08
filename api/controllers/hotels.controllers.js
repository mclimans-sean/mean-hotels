const dbconn = require('../data/dbconnection.js');
const hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  var db = dbconn.get();

  console.log("db", db);

  console.log('GET the hotels');
  res
    .status(200)
    .json(hotelData);
};

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
  console.log('GET hotelId', hotelId);
  res
    .status(200)
    .json(thisHotel);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log('POST new hotel');
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
}
