const express = require('express');

const {createComentarioController,
    allcomentController} = require('../controllers/ComentarioControlador');

    const route = express.Router()

//get all coments
route.get('/', allcomentController)
//create coments
route.post('/', createComentarioController)
module.exports = route