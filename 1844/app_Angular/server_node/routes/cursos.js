const express = require('express')

const cursoController =require('../controllers/cursos')
const router= express.Router()

const path='cursos'

router.get('/homeCursos', cursoController.homeCursos);
router.post('/test', cursoController.test);
router.post('/save-cursos', cursoController.saveCursos);
router.get('/cursos/:id?', cursoController.getCurso);
router.get('/cursos', cursoController.getCursos);
router.put('/cursos/:id', cursoController.updateCursos);
router.delete('/cursos/:id', cursoController.deleteCursos);

module.exports = router