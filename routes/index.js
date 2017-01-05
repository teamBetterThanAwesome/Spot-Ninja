var express = require('express');
var router = express.Router();
var request = require('request');
var GeoPoint = require('geopoint');

console.log("index js");

/* GET home page. */
router.get('/', function(req, res, next) {
    var userLocation = new GeoPoint(Number(req.query.userLat), Number(req.query.userLng)).boundingCoordinates(2)
    var coordinates = {
        topLeft: {
            lat: userLocation[1]._degLat,
            lng: userLocation[0]._degLon
        },
        bottomRight: {
            lat: userLocation[0]._degLat,
            lng: userLocation[1]._degLon
        },
        topRight: {
            lat: userLocation[1]._degLat,
            lng: userLocation[1]._degLon
        },
        bottomLeft: {
            lat: userLocation[0]._degLat,
            lng: userLocation[0]._degLon
        }
    };
    // console.log(coordinates.topLeft, coordinates.topRight, coordinates.bottomLeft, coordinates.bottomRight);
    request(`https://api.parkwhiz.com/v3_1/quotes/?start_time=2017-01-04T10:30:00&end_time=2017-01-04T13:30:00&email=&q=anchor_coordinates:${req.query.userLat},${req.query.userLng}%20search_type:transient%20bounds:${coordinates.topLeft.lat},${coordinates.topLeft.lng},${coordinates.topRight.lat},${coordinates.topRight.lng},${coordinates.bottomLeft.lat},${coordinates.bottomLeft.lng},${coordinates.bottomRight.lat},${coordinates.bottomRight.lng}%20venue_id:185768`,
        function(error, response, body) {
            res.send(body);
        });
});

module.exports = router;
