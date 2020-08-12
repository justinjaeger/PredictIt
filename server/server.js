import Express from 'express';
import Path from 'path';

const app = Express();
const PORT = 3001;

app.get("/", (req, res) => {
  // dont forget to json parse 
  res.send("home page works");
});

// app.get("/add", (req, res) => {
//   req.body.id 
//   res.send("home page works");
// });

// say I have an object that has all the movie info movies.js
// app.get('/movies/:id', (req, res) => {
//   res.send(req.params.id)
// })
// if I make a request to localhost:3001/movies/${id}
// it will throw that id number into the /: position of the URL

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))