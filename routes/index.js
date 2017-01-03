var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://api.parkwhiz.com/search/?lat=39.7576811&lng=-105.0068223&max_distance=10000&start=1483398004&end=1483398500&key=62d882d8cfe5680004fa849286b6ce20',
            function(error, response, body) {
              res.send(body);
            });
});

module.exports = router;
