const indexRouter = require('express').Router()

indexRouter.get('/', (req, res) => {
  res.send("Hello")
})

module.exports = indexRouter

