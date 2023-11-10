// server/models/jokes.model.js
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  jokeText: {
    type: String,
    required: true,
  },
  // Puedes agregar más campos según tus necesidades
});

module.exports = mongoose.model('Joke', JokeSchema);
