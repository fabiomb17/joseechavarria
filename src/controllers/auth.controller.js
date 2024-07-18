import { verify, sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import config from './../config'

const getAuth = (req, res) => {


}

const logout = (req, res) => {

   
}

const login = (req, res) => {

    res.render("login")

}

const getLogin = (req, res) => {

    res.render('index')

}

const register = (req, res) => {

    res.render("register")

}

const resetPassword = (req, res) => {

    res.render('forget-password')
}

module.exports.authController = {
    getAuth,
    logout,
    login,
    getLogin,
    register,
    resetPassword
}