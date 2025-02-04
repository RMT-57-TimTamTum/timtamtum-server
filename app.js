const express = require('express');
const indexRouter = require('./router');

const app = express()

app.use(indexRouter)

app.listen(3000, () => {
  console.log("Server listening on: http://localhost:3000");
})
