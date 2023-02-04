const express = require('express');
const { allRecursosController, createRecursoController } = require('../controllers/recursosAudiosController');
const upload = require('../middleware/multer');

const route = express.Router()

//Get all recursos
route.get('/', allRecursosController);
//Create a recurso
route.post('/', upload.any(), createRecursoController)



module.exports = route