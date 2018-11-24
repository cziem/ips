const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BioSchema = new Schema({
  firstName: { 
    type: String, 
    required: true,
    minlength: 5 
  },
  'lastName': { 
    type: String, 
    required: true,
    minlength: 5 
  },
  'email': {
    type: String,
    required: true,
    minlength: 12,
    unique: true
  },
  'password': {
    type: String,
    required: true,
    minlength: 3
  },
  // phoneNumber: [String],
  'nin': {
    type: Number,
    required: true,
    unique: true
  },
  'age': {
    type: Number,
    required: true,
    minlength: 1,
  },
  'height': {
    type: String,
    required: true,
  },
  'genotype': {
    type: String,
    required: true,
    minlength: 2
  },
  'blood_group': {
    type: String,
    required: true,
    minlength: 1
  },
  'lga': {
    type: String,
    required: true,
    minlength: 4
  },
  'residential_addr': {
    type: String,
    minlength: 8,
    required: true
  }
})

const userSchema = new Schema({
  'bio': BioSchema
})

const User = mongoose.model('User', userSchema)

module.exports = User
