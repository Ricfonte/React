
const express = require('express');
const connectDB = require('./config/mongoose.config');
const jokesRoutes = require('./routes/jokes.routes');

const app = express();
const PORT = 3000;


connectDB();


app.use(express.json());

app.use('/api', jokesRoutes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
