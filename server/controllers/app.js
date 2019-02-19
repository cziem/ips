module.exports = {
  login: (req, res) => {
    res.redirect('/login')
  },

  dashboard: (req, res) => {
    res.render('dashboard')
  },

  profile: (req, res) => {
    res.render('users/profile')
  },
}