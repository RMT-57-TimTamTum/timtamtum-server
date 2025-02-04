const indexRouter = require('express').Router()
const authRouter = require('./auth')

indexRouter.get('/', (req, res) => {
  res.send("Hello")
})

indexRouter.use(authRouter)

module.exports = indexRouter

