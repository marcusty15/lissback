const express = require('express');
const router = express.Router()
const emailControll = require('../controllers/mailController copy');


router.post('/', emailControll.enviarCorreo2)


module.exports = router