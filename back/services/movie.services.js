const MovieSchema = require("../models/movie.models");

const getMovie = async () => {
  const movie = await MovieSchema.find();
  return movie;
};

module.exports = {
  getMovie,
};
