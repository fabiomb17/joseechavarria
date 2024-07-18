import mysql from 'promise-mysql'
import config from './../config'

// Creamos la conexion a la base de datos
const connection = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
  });

// Creo una funcion y retorno la conexion
const getConnection = () => {

    return connection
   
}

// Retornamos el modulo de getConnection
module.exports = {
    getConnection
}


