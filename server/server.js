require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI

const servePublic = path.join(__dirname, '../public')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(servePublic))
app.set('view engine', 'pug')

const userRoutes = require('./routes/users')

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})
  .then(() => console.log(`connected to database: ${uri}`))
  .catch(err => console.log('sorry we could not connect to the database...'))

app.get('/', (req, res) => {
  res.render('login')
})

app.use('/users', userRoutes)

app.listen(port, () => console.log(`server running on port: ${port}`))

module.exports = app