import express from "express";
import cors from "cors"
import *as newRoutes from  "./routes/route.js";
import mongoose from "mongoose";


const app = express();
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/mascotas")
.then(() => console.log("conectado ok, sin dormir!!"))
.catch((e) =>console.log(e));
app.use(express.json());
app.use(newRoutes.router);


app.listen(8080);