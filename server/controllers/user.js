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
    let user = new User({
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
  user_login (req, res) {
    res.send('logging in...')
  }
}