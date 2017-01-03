var express = require('express');
var router = express.Router();

var spots = require('../db/query.js');

router.get('/', (req, res) => {
  spots.getAll()
    .then(result => {
      res.json(result);
    });
});



module.exports = router;
