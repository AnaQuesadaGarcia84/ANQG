const express = require('express')

const cursoController =require('../controllers/evaluable')
const router= express.Router()

//api/cursos
router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTarea);
router.put('/:id', tareaController.actualizarTarea);
router.get('/:id', tareaController.obtenerTarea);
router.delete('/:id', tareaController.eliminarTarea);


module.exports = router