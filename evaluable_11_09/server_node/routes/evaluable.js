const express = require('express')

const cursoController =require('../controllers/evaluable')
const router= express.Router()

const path='tareas'

router.get('/homeCursos', cursoController.homeCursos);


module.exports = router