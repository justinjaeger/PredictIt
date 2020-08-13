const path = require("path");
const express = require("express");
const app = Express();
const PORT = 3001;
// require routers
  // const apiRouter = require("./routes/api");

// configure global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // dont forget to json parse 
  res.send('this is server.js');
});



// say I have an object that has all the movie info movies.js
// app.get('/movies/:id', (req, res) => {
//   res.send(req.params.id)
// })
// if I make a request to localhost:3001/movies/${id}
// it will throw that id number into the /: position of the URL

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
module.exports = app;