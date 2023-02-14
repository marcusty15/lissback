const {request} = require('../DB/request');

const allComent = async () =>{
    const comentarios = await request('SELECT * FROM comentarios');
    return comentarios
}

const createComentarios = async (nombre, titulo, comentario) =>{
    const coment = await request(`INSERT INTO comentarios(nombre, titulo, comentario)
    VALUES("${nombre}", "${titulo}", "${comentario}")`)

    const newQuery = await request(`SELECT * FROM comentarios`);
    return coment.insertId ? { created: true, query: newQuery } : { created: false }
}

module.exports = {
    allComent,
    createComentarios
}