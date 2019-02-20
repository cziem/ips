const passport = require('passport')
const LocalStrategy = require('passport-local')

const User = require('../model/user')

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = {
  get_users (req, res) {
    User.find()
      .select('-__v')
      .then(user => {
        res.status(200).send(user)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },
  
  // Registration form
  register: (req, res) => {
    res.render('registration')
  },
  
  // Register a new user
  add_new_user: async (req, res) => {
    
  },

  // Handle User Login
  user_login: passport.authenticate('local', {
    successRedirect: '/dashboard',
    successFlash: 'Successfully logged into admin account',
    failureRedirect: '/',
    failureFlash: 'Invalid credentials! Contact admin'
  }),

  // // logout User
  logout: (req, res) => {
    req.logout()
    req.flash('success', `See you soon...`)
    res.redirect('/')
  }
}