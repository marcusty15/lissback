const express = require('express');
const router = express.Router()
const emailController = require('../controllers/mailController');

router.post('/', emailController.enviarCorreo)

module.exports = router