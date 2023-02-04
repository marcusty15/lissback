const express = require('express');
const router = express.Router()
const emailControll = require('../controllers/mailController copy 2');


router.post('/', emailControll.enviarCorreo3)


module.exports = router