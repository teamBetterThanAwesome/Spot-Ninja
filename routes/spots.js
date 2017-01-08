var express = require('express');
var router = express.Router();
var spots = require('../db/query.js');

router.get('/', (req, res) => {
    spots.getAllSpots()
        .then(result => {
            res.json(result);
        });
});

router.get('/:id', (req, res, next) => {
  spots.getUserById(req.params.id)
      .then(result => {
        res.json(result);
      });
});

router.get('/at/:id', (req, res) => {
    spots.getSpotById(req.params.id)
        .then(result => {
          res.json(result)
        });
});

router.post('/new', (req, res, next) => {
    let spot = {
      lat: req.body.lat,
      lng: req.body.lng,
      rating: req.body.rating,
      comment: req.body.comment,
      user_id: req.body.user_id
    };
    spots.create(spot)
        .then(ids => {
            const id = ids[0];
            res.json({
              message: id
            });
        });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    let spot = {
      lat: req.body.lat,
      lng: req.body.lng,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    spots.update(id, spot)
        .then(() => {
            res.json({
              message: id
            });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    spots.delete(id)
        .then(() => {
            res.json({
              message: '👍🗑'
            });
        });
});
module.exports = router;
