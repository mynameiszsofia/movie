const movieService = require("../services/movie.services");

const getMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getMovie();
    res.status(200).json({ result: movie });
  } catch (err) {
    next(err);
  }
};
const saveMovie = async (req, res, next) => {
  try {
    const movie = await movieService.saveMovie();
    res.status(200).json({ result: movie });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMovie,
  saveMovie,
};
