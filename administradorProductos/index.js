import express from 'express';
import * as productRoute from "./routes/productRoute.js";
import mongoose from 'mongoose';

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/tienda")
.then(() => {
    console.log("todo Ok por ahora");
})
.catch((error) => {
    console.log("Hubo un error " + error);
});

app.use(express.json());
app.use(productRoute.router);

app.listen(8000);