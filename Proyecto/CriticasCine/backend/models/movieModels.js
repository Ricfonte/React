import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
    movieTitle: { type: String, required: true},
    yourName: { type: String, required: true},
    rating: { type: Number, required: true},
    youReview: { type: String, required: true},
});

const Movie = mongoose.model("ReviewFilms", MovieSchema )
export default Movie;