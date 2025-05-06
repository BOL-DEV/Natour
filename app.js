const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./router/toursRoute');
const userRouter = require('./router/usersRoute');

const app = express();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  console.log('Hey from the middleware ');
  next();
});

app.use(express.static(`${__dirname}/public`));

// Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// server

module.exports = app;
