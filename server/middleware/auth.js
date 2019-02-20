
module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    } else {
      req.flash('error', 'You have to be logged in...')
      res.redirect('back')
    }
  }
}