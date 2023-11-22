import Movie from "../models/movieModels.js"

const createMovie = async (req, res) =>{
    var movieData = req.body;
    var newMovie = await Movie.create(movieData);
    res.json(newMovie);
}

const createReview =async (req, res) =>{
    var ReviewData = req.body;
    var newReviewMovie = await Movie.create(ReviewData);
    res.json(newMovie);

}

const getListMovies = async (req, res) =>{
    var movieList= await Movie.find();
    res.json(movieList);
    
}

const getReviewMovies = async(req, res) =>{
    var idMovie= req.params.id;
    var movieFound= await Movie.findById(idMovie);
    console.log(info)
    res.json(movieFound);
    
}

const getDeleteMovies = async (req, res) =>{
    var idMovie= req.params.id;
    var movieDelete = await Movie.findByIdAndDelete(idMovie)
    res.status(200).json();
    
}

const UpdateRatingtMovies =async (req, res) =>{
    var idMovie= req.params.id;
    var data = req.body 
    await Movie.findByIdAndUpdate(idMovie, data)
    res.status(200).json();
    
}



export { createMovie, createReview , getListMovies, getReviewMovies, getDeleteMovies, UpdateRatingtMovies,}