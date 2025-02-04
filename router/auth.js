const AuthController = require('../controllers/AuthController')

const authRouter = require('express').Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)

module.exports = authRouter
