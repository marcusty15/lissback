const express = require('express')
const routerUsers = express.Router()

const signupController = require('../controllers/signupController')
const { Router } = require('express')

routerUsers.get("/", signupController.allUsersController)

routerUsers.post("/signup", signupController.signupController)



module.exports = routerUsers