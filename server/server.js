require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
// const cors = require('cors')

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI


// app.use(cors({
  //   origin: 'http://localhost:3000/users/register'
  // }))
  
// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-auth-token");
  // res.header("Acces-Control-Expose-Headers", "x-auth-token")
  
  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});
  
const servePublic = path.join(__dirname, '../public')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(servePublic))
app.set('view engine', 'ejs')

const userRoutes = require('./routes/users')
const appRoutes = require('./routes/appRoute')

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log(`connected to database: ${uri}`))
  .catch(err => console.log('sorry we could not connect to the database...'))

// Routes
app.get('/', appRoutes)
app.use('/users', userRoutes)


app.listen(port, () => {
  if (!process.env.NODE_ENV) {
    console.log(`server running on: http://localhost:${port}`)
  }
})

module.exports = app