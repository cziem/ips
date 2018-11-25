const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BioSchema = new Schema({
  firstName: { 
    type: String, 
    required: true,
    minlength: 2 
  },
  'lastName': { 
    type: String, 
    required: true,
    minlength: 2 
  },
  'email': {
    type: String,
    required: true,
    minlength: 8,
    unique: true,
    isConfirmed: Boolean
  },
  'password': {
    type: String,
    required: true,
    minlength: 3
  },
  'username': {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  // phoneNumber: [String],
  'nin': {
    type: Number,
    required: true,
    unique: true,
    isConfirmed: Boolean
  },
  'age': {
    type: Number,
    // required: true,
    minlength: 1,
  },
  'height': {
    type: String,
    // required: true,
  },
  'genotype': {
    type: String,
    // required: true,
    minlength: 2
  },
  'blood_group': {
    type: String,
    // required: true,
    minlength: 1
  },
  'lga': {
    type: String,
    // required: true,
    minlength: 4
  },
  'residential_addr': {
    type: String,
    minlength: 8,
    // required: true
  }
})

const Birth_Records = new Schema({
  'dob': {
    type: Date,
    default: Date.now
  },
  'time_of_birth': {
    type: Date,
    default: Date.now
  },
  'hospital_name': String,
  'hospital_address': String,
  'doctor_in_charge': String,
  'mid_wives': [String]
})

const userSchema = new Schema({
  'bio': BioSchema,
  'birth_records': Birth_Records
})

const User = mongoose.model('User', userSchema)

module.exports = User
