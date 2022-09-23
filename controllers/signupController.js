const {signUpUser, allusers} = require('../models/signup');

const signupController = async (req, res) => {
    const {nombre,apellido, email, telefono} = req.body
    
    try {
        const data = await signUpUser(nombre,apellido, email, telefono)
        console.log(data)
        return res.status(201).send(data)
        
    } catch (error) {
        console.log("error backend signupController")
        
        return res.status(400).send({
            error: true,
            msg:'Error al registrar el usuario'
        })
    }
}

const allUsersController = async (req, res) => {
    
    try {
        const data = await allusers()
        return res.send(data)
    } catch (error) {
        console.log("error backend allUsersController")
        
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener los usuarios'
        })
    }
}


module.exports = {
    allUsersController,
    signupController
}