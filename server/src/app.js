const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const listingsRouter = require('./routes/listings');
<<<<<<< HEAD
const dashboardRouter = require('./routes/dashboard');
=======
const userRouter = require('./routes/user');
const cookieParser = require('cookie-parser');
>>>>>>> d218eaa1840a1e1f9f995a46321d074039137e14

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://generalUser:Nb1kQoV2Exsg0xzz@tmuclassified.esjsjrr.mongodb.net/TMUClassified?retryWrites=true&w=majority&appName=TMUClassified';

main().catch((err) => console.log(err));
async function main()
{
  await mongoose.connect(mongoDB);
}

app.use(logger('dev'));
app.use(express.json());
// Enable CORS for all origins
app.use(cors());

// Cookie Parser
app.use(cookieParser());

//Routers
app.use('/api/listings', listingsRouter);
<<<<<<< HEAD
app.use('/api/dashboard', dashboardRouter);
=======
app.use('/api/user', userRouter);
>>>>>>> d218eaa1840a1e1f9f995a46321d074039137e14

// catch 404 and forward to error handler
app.use(function (req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
