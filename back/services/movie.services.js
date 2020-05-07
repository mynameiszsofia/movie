const MovieSchema = require("../models/movie.models");

const createMovie = async (reqBody) => {
    const movie = await MovieSchema.create(reqBody);
    return movie;
};

const getMovie = async () => {
    const movies = await MovieSchema.find();
    return movies;
}
const getMovieById = async (movieId) => {
    const movie = await MovieSchema.findById(movieId);
    if (!movie) {
        throw new Error("Not found");
    }
    return movie;
};
module.exports = {
    createMovie,
    getMovie,
    getMovieById,
};