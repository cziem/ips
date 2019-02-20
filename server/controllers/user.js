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
    const { 
      firstName,
      lastName,
      username,
      email,
      password,
      state,
      nin,
      nic
    } = req.body

    const userData = new User({
      firstName,
      lastName,
      username,
      password,
      email,
      state,
      nin,
      nic
    })

    try {
      // let user = await User.register(userData, password)
      // passport.authenticate('local')(req, res, () => {
      //   res.redirect('/dashboard')
      //   res.render('dashboard', user)
      // })
      const user = await User.create(userData)
      req.flash('success', `Registration Successful. ${user.username}, remember to updated you profile.`)

      // res.render('dashboard', { user })
      res.redirect(`/dashboard/${user.username}`)
    } catch (error) {
      res.status(500)
      req.flash('error', error.message)
      console.log(error)
    }
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