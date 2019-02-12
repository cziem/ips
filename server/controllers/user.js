const User = require('../model/user')

module.exports = {
  get_users (req, res) {
    User.find()
      .select('-__v')
      .then(user => {
        res.status(200).send(user)
      })
      .catch(err => {
        res.status(400).send('No users found in the database')
      })
  },

  // Register a new user
  add_new_user (req, res) {
    let user = new User({
      bio: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        nin: req.body.nin,
        age: req.body.age,
        height: req.body.height,
        genotype: req.body.genotype,
        blood_group: req.body.blood_group,
        lga: req.body.lga,
        residential_addr: req.body.residential_addr
      },
      birth_records: {
        dob: req.body.dob,
        time_of_birth: req.body.tob,
        hospital_name: req.body.hospital_name,
        hospital_address: req.body.hospital_address,
        doctor_in_charge: req.body.doctor_in_charge,
        mid_wives: req.body.mid_wives
      }
    })

    user.save()
      .then(doc => {
        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(400).send(err.message)
      })
  },

  // user login
  user_login: async (req, res) => {
    let username = req.body.username

    try {
      const user = await User.find({ username })
      if (user.length > 0) {
        res.status(200)
        return res.render('dashboard', { user })
      } else {
        return
      }
    } catch (error) {
      req.flash('error', 'User not found!, Check credentials')
      res.redirect('/login')
    }
  },

  // register new users
  register(req, res) {
    res.render('registeration')
  }
}