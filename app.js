const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const appRoutes = require('./routes/users');
const config = require('./config/db');
const hbs = require('hbs');

const app = express();
mongoose.connect(config.db);

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

// Port Number
const port = 3000;
app.listen(port, () => {
  console.log('Server started on port '+ port);
})

// view engine setup



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

app.use(cors());


app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('/');
});


module.exports = app;
