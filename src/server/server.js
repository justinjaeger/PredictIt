const path = require('path');
const express = require('express');
const app = express();
const PORT = 9000;
const cookieParser = require('cookie-parser');

console.log('Server.js is listening')

// REQUIRE ROUTERS HERE:
const mainRouter = require('./routes/mainRouter');

// PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// SERVE STATIC FILES
app.use(express.static('../dist'));

// MAIN ROUTER
app.use("/", (req, res) => {
  res.send('this is server.js');
});

// 404
app.use((req, res) => {
  return res.status(404).send('Page not found. TRY AGAIN!');
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 501,
    message: { err: 'An error occurred!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// APP.LISTEN
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

module.exports = app;