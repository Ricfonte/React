
const express = require('express');
const jokesController = require('../controllers/jokes.controller');

const router = express.Router();

router.get('/jokes', jokesController.getAllJokes);
router.get('/jokes/:id', jokesController.getJokeById);
router.post('/jokes', jokesController.createJoke);
router.put('/jokes/:id', jokesController.updateJoke);
router.delete('/jokes/:id', jokesController.deleteJoke);

module.exports = router;
