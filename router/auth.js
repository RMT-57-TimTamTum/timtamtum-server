const AuthController = require('../controllers/AuthController')

const authRouter = require('express').Router()

authRouter.post('/register', AuthController.register)

module.exports = authRouter

