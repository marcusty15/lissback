const express = require('express');
const router = express.Router()
const {enviarCorreo} = require('../controllers/mailController');

router.post('/', enviarCorreo)

module.exports = router