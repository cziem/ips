module.exports = {
  // login
  login (req, res) {
    res.render('login')
  },

  dashboard: (req, res) => {
    res.render('dashboard')
  }
}