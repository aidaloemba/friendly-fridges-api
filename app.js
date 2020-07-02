var express = require('express');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');

var mongoose = require("mongoose");
require("dotenv").config();
var session = require('express-session');
var morgan = require('morgan');
const MongoStore = require('connect-mongo')(session);

var createError = require('http-errors');



mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  })

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(session({
    cookie: { secure: "auto" },
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: (14 * 24 * 60 * 60), // = 14 days. Default
        autoRemove: 'native' // Default
    })
}));

app.use(morgan('combined'))
  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', require('./routes/users'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/fridge', require('./routes/fridge'));
app.use('/submit', require('./routes/foods/submit'));

module.exports = app;
