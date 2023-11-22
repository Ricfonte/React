import express from "express";
import *as movieCtlr from "../controllers/movieController.js";

const router =express.Router ();
router.post("/movies/new", movieCtlr.createMovie);
router.post("/movies/:id/review", movieCtlr.createReview);


router.get ("/movies", movieCtlr.getListMovies);
router.get ("/movies/:id", movieCtlr.getReviewMovies);
router.delete ("/movies/:id", movieCtlr.getDeleteMovies);
router.put ("/movies", movieCtlr.UpdateRatingtMovies);



export {router}
