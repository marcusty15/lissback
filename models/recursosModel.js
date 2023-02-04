const { request } = require('../DB/request')

const allRecursos = async () =>
{
    const recursos = await request(`SELECT * FROM recursos_audios`)
    return recursos
}

const createRecurso = async (titulo, descripcion, audio, imagen) =>
{
    const recurso = await (request(`INSERT INTO recursos_audios(titulo, descripcion, imagen_path, audio_path)
    VALUES( "${titulo}", "${descripcion}", "${imagen}" , "${audio}")
    `))

    const newQuery = await request(`SELECT * FROM recursos_audios`)
    return recurso.insertId ? { created: true, query: newQuery } : { created: false }

}



module.exports = {
    allRecursos,
    createRecurso
}