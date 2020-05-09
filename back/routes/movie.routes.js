const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controllers");

router.get("/", movieController.getMovie);
router.post("/movie", movieController.saveMovie);

module.exports = router;
