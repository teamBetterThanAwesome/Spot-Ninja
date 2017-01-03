var express = require('express');
var router = express.Router();
var spots = require('../db/query.js');

router.get('/', (req, res) => {
    spots.getAll()
        .then(result => {
            res.json(result);
        });
});

router.get('/:id', (req, res, next) => {
    spots.getById(req.params.id)
        .then(result => {
            res.json(result)
        });
});

router.post('/', (req, res, next) => {
    spots.create(spot)
        .then(ids => {
            const id = ids[0];
            window.location = '/spots/' + id;
        });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    spots.update(id, spot)
        .then(() => {
            window.location = `/spots/${id}`;
        });
});

router.delete('/id', (req, res) => {
    const id = req.params.id;
    spots.delete(id)
        .then(() => {
            window.location = ('/spots')
        })
})
module.exports = router;
