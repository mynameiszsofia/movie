const movieService = require("../services/movie.services");

const createMovie = async (req, res, next) => {};

const getMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getMovie();
    res.status(200).json({ result: movies });
  } catch (err) {
    next(err);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
};
