import { getConnection } from "./../database/db"

const getIndex = async (req, res) => {
    
    try{
       
        res.render('index')

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

const getSeguridad = async (req, res) => {
    
    try{
       
        let data = {seguridad : 'active'}
        res.render('configuracion/seguridad', {data : data})

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

const getNotificaciones = async (req, res) => {
    
    try{
       
        let data = {notificaciones : 'active'}
        res.render('configuracion/notificaciones', {data : data})

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

const getEditarPerfil = async (req, res) => {
    
    try{
       
        res.render('perfil/editar-perfil')

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

const getHeaders = async (req, res) => {
    try{
        const connection = await getConnection(); //obtenemos la conexion
        //Realizamos la consulta
        const parametrosSql = {"website_id" : req.params['id']}
        const sql = "SELECT cabeceras as 'headers' FROM monitoreo where id = (select MAX(id) from monitoreo where ?)"
        const consult = await connection.query(sql, parametrosSql)

        res.json(...consult)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

module.exports.portalController = {
    getIndex,
    getSeguridad,
    getNotificaciones,
    getEditarPerfil
}