var express = require('express');
var router = express.Router();
var request = require('request');
var GeoPoint = require('geopoint');

/* GET home page. */
router.get('/', function(req, res, next) {
  // userLocation = new Geopoint(${req.query.userLat}, ${req.query.userLng}).boundingCoordinates(2000) work on this later!
  // console.log(userLocation);
    console.log(req.query);
    request(`https://api.parkwhiz.com/search/?lat=${req.query.userLat}&lng=${req.query.userLng}&max_distance=10000&start=1483398004&end=1483398500&key=62d882d8cfe5680004fa849286b6ce20`,
        function(error, response, body) {
            res.send(body);
        });
});

module.exports = router;
