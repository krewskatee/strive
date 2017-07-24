const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
  res.send('register');
});


router.get('/authenticate', (req, res, next) => {
  res.send('authenticate');
});

router.get('/fitbitauth', (req, res, next) => {
  res.send('fitbitauth');
});


router.get('/dashboard', (req, res, next) => {
  res.send('dashboard');
});

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
