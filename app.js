var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var images = require('./routes/images');
var news = require('./routes/list');

var app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'docs')));

app.use('/news', (req, res, next) => {
  res.sendFile(__dirname + '/docs/index.html');
});

app.use('/', routes);
app.use('/api/images', images);
app.use('/api/list', news);

app.use((req, res, next) => {
  res.sendFile(__dirname + '/docs/index.html');
});

module.exports = app;
