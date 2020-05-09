const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controllers");

router.post("/movies", movieController.createMovie);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovieById);

module.exports = router;
