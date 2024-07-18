import { verify } from 'jsonwebtoken'
import config from './../config'

//middleware que nos permite validar si existe un token activo
const verifyToken = (req, res, next) => {

    /*

    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){

        const token = bearerHeader.split(" ")[1]

        req.token = token

        jwt.verify(req.token, 'my_secret_key', (error, data) => {
        
            if (error) {
                console.log(error)
                res.status(403).send("Acceso no autorizado")
                
            }else{
                req.data = data
                next()
            }
        })

    }else{
        res.status(403)
        res.send("Acceso no autorizado")
    }
    */

    const {userAuthToken} = req.cookies

    if (!userAuthToken) {
        res.status(403).json({'error' : "Your session token is invalid or not exists"})
    }

    verify(userAuthToken, config.secret_key, (error, data) => {
        
        if (error) {
            console.log(error)
            res.status(401).json({'error1' : "Your session token is invalid or not exists"})
            
        }else{
            req.data = data
            next()
        }
    })

}

module.exports.securityMiddelware = {
    verifyToken
}