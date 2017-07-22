const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
  res.send('REGISTER');
});


router.get('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

router.get('/fitbitauth', (req, res, next) => {
  res.send('FITBIT AUTH');
});


router.get('/dashboard', (req, res, next) => {
  res.send('DASHBOARD');
});

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
