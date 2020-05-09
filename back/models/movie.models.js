const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const MovieSchema = mongoose.model("movieSchema", movieSchema);
module.exports = MovieSchema;
