const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../db/query.js');

const router = express.Router();


router.get('/', (req, res) => {
  User.getAllUsers()
        .then(result => {
          res.json({
            message: result
          });
        });
});

router.get('/:id', (req, res, next) => {
  User.getUserById(req.params.id)
      .then(result => {
        res.json(result);
      });
});

router.post('/new',(req, res, next) => {
  bcrypt.hash(req.body.password, 8)
          .then(hash => {
            const user = {
              email: req.body.email,
              password: hash,
              name: req.body.name,
            };
            User
              .createNewUser(user)
                  .then(result => {
                    res.json({
                      message: result
                    });
                  });
          });
});

module.exports = router;
