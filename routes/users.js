const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.post('/register', (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured'
      });
    }
      res.status(201).json({
        message: 'user created',
        obj: result
      });
    });
  });

module.exports = router;
