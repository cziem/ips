require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI

const servePublic = path.join(__dirname, '../public')

app.use(cors({
  origin: 'http://localhost:3000/users/register'
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(servePublic))
app.set('view engine', 'pug')

const userRoutes = require('./routes/users')
const appRoutes = require('./routes/appRoute')

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})
  .then(() => console.log(`connected to database: ${uri}`))
  .catch(err => console.log('sorry we could not connect to the database...'))

// Routes
app.get('/', appRoutes)
app.use('/users', userRoutes)

app.listen(port, () => console.log(`server running on port: ${port}`))

module.exports = app