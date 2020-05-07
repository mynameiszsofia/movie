const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    image: {
        type: String
    }
});

const MovieSchema = mongoose.model("movieSchema", movieSchema);
module.exports = MovieSchema;