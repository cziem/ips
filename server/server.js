require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const expressSanitizer = require('express-sanitizer')
const passport = require('passport')
const cors = require('cors')


const userRoutes = require('./routes/users')
const appRoutes = require('./routes/appRoute')


const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI
  
const servePublic = path.join(__dirname, '../public')

app.use(require('express-session')({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(servePublic))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(flash())
app.locals.moment = require('moment')

// Configure Passport
app.use(require('express-session')({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


// pass current user to every page and route
app.use((req, res, next) => {
  res.locals.currentUser = req.user
  res.locals.error = req.flash("error")
  res.locals.warn = req.flash("warn")
  res.locals.success = req.flash("success")
  next()
})

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