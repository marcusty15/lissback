
const {request} = require('./../DB/request');


module.exports.signUpUser = async (nombre,apellido, email, telefono) =>{
    const data = await request(
        `INSERT INTO usuario (nombre,apellido,email, telefono)
        VALUE('${nombre}', '${apellido}', '${email}', '${telefono}')`
    )
        return{         
            data
        }
}

module.exports.allusers = async () => {
    const data = await request("SELECT * FROM usuario ");
  
    return data;
  };