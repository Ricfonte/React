import express from "express";
import cors from "cors";
import *as movieRoutes from "./routes/movieRoutes.js";
import mongoose from "mongoose";



const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/film")
    .then(() => console.log("no te duermas ya se conectó"))
    .catch((e) => console.log(e))

app.use(express.json());

app.use(movieRoutes.router);
app.listen (8080);