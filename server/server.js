require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})
  .then(() => console.log(`connected to database: ${uri}`))
  .catch(err => console.log('sorry we could not connect to the database...'))

app.get('/', (r, s) => {
  s.send('Welcome to the National Central Database System...')
})

app.listen(port, () => console.log(`server running on port: ${port}`))

module.exports = app