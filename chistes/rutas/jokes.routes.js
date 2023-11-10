const express = require('express');
const router = express.Router();
const JokesController = require('../controladores/jokes.controller');

router.get('/', JokesController.obtenerTodos);
router.get('/:id', JokesController.obtenerUno);
router.post('/', JokesController.crear);
router.put('/:id', JokesController.actualizar);
router.delete('/:id', JokesController.eliminar);

module.exports = router;