const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  bio: {
    name: { 
      type: String, 
      required: true,
      minlength: 5 
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User