const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();
const movieRouter = require("./routes/movie.routes");

const connect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/movie", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

connect();

app.use(express.json());
app.use("/", movieRouter);

app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.listen(5000, () => {
  console.log("app is running on 5000");
});
