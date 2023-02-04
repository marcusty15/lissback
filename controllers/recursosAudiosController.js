const { allRecursos, createRecurso } = require("../models/recursosModel");

const allRecursosController = async (req, res) =>
{
    const recursos = await allRecursos()
    return res.status(200).send(recursos)
};


const createRecursoController = async (req, res) =>
{
    const { titulo, descripcion, } = req.body;   
    const { filename: audio } = req.files[0];
    const { filename: imagen } = req.files[1];
    try
    {
        const recurso = await createRecurso(titulo, descripcion, audio, imagen)
        return recurso.created ? res.status(200).send(recurso) : res.status(200).send(recurso)
    } catch (error)    {
        console.log(error)
        return res.status(500).send(error)
    }
}


module.exports = {
    allRecursosController,
    createRecursoController
};
