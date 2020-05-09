const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const movieRoutes = require("./routes/movie.routes");
const movieService = require("./models/movie.models");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect("mongodb://localhost/movie")
  .then(console.log("Database Connection Success"))
  .catch((e) => console.log(e));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.post("/movies", async (req, res) => {
  const movie = JSON.parse(req.body.movie);
  const data = {
    name: movie.name,
    type: movie.type,
    genres: movie.genres[0],
    rating: JSON.stringify(movie.rating), // this data is weird! log it to consoole
    image: movie.image.original,
  };
  const newMovie = new movieService(data);
  newMovie
    .save()
    .then(() => {
      res.json({ result: movie });
    })
    .catch((e) => console.log(e));
});

app.use("/movie", movieRoutes);

app.listen(5000, () => console.log("app is running on 5000"));
