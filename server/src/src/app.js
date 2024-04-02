const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const listingsRouter = require('./routes/listings');

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://generalUser:Nb1kQoV2Exsg0xzz@tmuclassified.esjsjrr.mongodb.net/?retryWrites=true&w=majority&appName=TMUClassified';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(logger('dev'));
app.use(express.json());
// Enable CORS for all origins
app.use(cors());

//Routers
app.use('/api/listings', listingsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
