const User = require('../model/user')

module.exports = {
  get_users (req, res) {
    // res.send('getting users')
    try {
      let user = User.find().select('-__v')
      res.status(200).send(user)
    } catch (error) {
    res.status(400).send('No users found in the database')
    }
  },

  // Register a new user
  add_new_user (req, res) {
    console.log(req.body)
    // search the database for a given user,
    let email = req.body.email
    let user = User.find({ email })
    
    //  if found return error
    if (user) return new Error(`Sorry, user with ${email} already exists`)

    // else save the new user and return details
    user = new User({
      bio: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        nin: req.body.nin,
        age: req.body.age,
        height: req.body.height,
        genotype: req.body.genotype,
        blood_group: req.body.blood_group,
        lga: req.body.lga,
        residential_addr: req.body.residential_addr
      }
    })

    console.log(user)

    user.save()
      .then(doc => {
        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(400).send(err.message)
      })
  },

  // user login
  user_login (req, res) {
    res.send('logging in...')
  }
}