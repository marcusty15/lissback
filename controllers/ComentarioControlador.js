const { allComent,
    createComentarios} = require('../models/ComentariosModel');

    const allcomentController = async (req, res) =>{
        const comentarios = await allComent()
        return res.status(200).send(comentarios)
    }

    const createComentarioController = async (req, res)=>{

        const {nombre, titulo, comentario} = req.body
        try
        {
            const comen = await createComentarios(nombre, titulo, comentario)
            return comen.created ? res.status(200).send(comen) : res.status(200).send(comen)
        } catch (error){
            console.log(error)
            return res.status(500).send(error)}
    }

    module.exports = {
        createComentarioController,
        allcomentController
    }