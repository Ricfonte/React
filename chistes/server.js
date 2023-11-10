
const express = require('express');
const app = express();
const jokesRoutes = require('./rutas/jokes.routes');


app.use(express.json());


app.use('/api/bromas', jokesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:3000`);
});