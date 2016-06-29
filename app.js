var express      = require('express');
var path         = require('path');
// var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser  = require('body-parser');



var routes = require('./routes/index');
var users  = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Mongoose stuff
var mongoose     = require('mongoose')
mongoose.connect('mongodb://localhost/nod-mongoose')
// view engine setup

app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.listen(process.env.PORT || 3000);
