const movieService = require("../services/movie.services");

const createMovie = async (req, res, next) => {
    console.log("req", req.body);
    try {
        const movie = await movieService.createMovie({
            name: req.body.name,
            type: req.body.type,
            genres: req.body.genres,
            rating: req.body.rating,
            image: req.body.image
        });
        res.status(200).json({ result: movie });
    } catch (err) {
        next(err);
    }
}

const getMovies = async (req, res, next) => {
    try {
        const movies = await movieService.getMovie();
        res.status(200).json({ result: movies });
    }
    catch (err) {
        next(err);
    };
}
/* 
const getMovies = async (req, res, next) => {
    try {
        axios
            .get("http://api.tvmaze.com/shows?page=1")
            .then(data => this.set)


    } catch (err) {
        next(err);
    }
}; */


/* const fetch = require("node-fetch");

const getMovies = async (req, res, next) => {
    try {
        function findData() {
            return fetch("http://api.tvmaze.com/shows?page=1");
        }
        const processData = async () => {
            const foundData = await findData();
            const responseData = await foundData.json();
            return responseData;
        };
        const movies = await processData();
        res.status(200).json(movies);
        console.log(movies[0].id);
    } catch (err) {
        next(err);
    }
}; */

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
    getMovieById
}


