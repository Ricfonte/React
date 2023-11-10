
const Joke = require('../models/jokes.model');

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener chistes' });
  }
};

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ error: 'Chiste no encontrado' });
    }
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el chiste' });
  }
};

exports.createJoke = async (req, res) => {
  const { jokeText } = req.body;

  try {
    const newJoke = new Joke({ jokeText });
    await newJoke.save();
    res.json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el chiste' });
  }
};

exports.updateJoke = async (req, res) => {
  const { jokeText } = req.body;

  try {
    const updatedJoke = await Joke.findByIdAndUpdate(
      req.params.id,
      { jokeText },
      { new: true }
    );

    if (!updatedJoke) {
      return res.status(404).json({ error: 'Chiste no encontrado' });
    }

    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el chiste' });
  }
};

exports.deleteJoke = async (req, res) => {
  try {
    const deletedJoke = await Joke.findByIdAndDelete(req.params.id);

    if (!deletedJoke) {
      return res.status(404).json({ error: 'Chiste no encontrado' });
    }

    res.json({ message: 'Chiste eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el chiste' });
  }
};
