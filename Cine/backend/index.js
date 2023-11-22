const express = require ("express");
const app = express();
const port = 8000;


app.use (express.json());



const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);



app.listen(port, () => console.log(`Listening on port: ${port}`));

