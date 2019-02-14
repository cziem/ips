const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const midWife = new Schema({
  name: String,
  age: Number
})

const doctor = new Schema({
  name: String,
  specialization: String,
  years_in_practice: Number
})

const Birth_Record = new Schema({
  dob: { type: Date, default: Date.now },
  time_of_birth: { type: Date, default: Date.now },
  hospital_name: String,
  hospital_address: String,
  doctor_in_charge: doctor,
  mid_wives: [midWife]
})

const userSchema = new Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2  },
  email: { type: String, required: true, minlength: 8, unique: true }, isEmail: { Confirmed: Boolean, default: false },
  password: { type: String, minlength: 6 },
  username: { type: String, required: true, unique: true, minlength: 3 },
  phoneNumbers: [Number],
  nin: { type: Number, required: true, unique: true },
  isConfirmedNIN: { type: Boolean, default: false },
  nic: { type: Number, required: true, unique: true },
  isConfirmedNIC: { type: Boolean, default: false },
  age: { type: Number, minlength: 1 },
  height: { type: String },
  genotype: { type: String, minlength: 2 },
  blood_group: { type: String, minlength: 1 },
  lga: { type: String, minlength: 4 },
  residential_addr: { type: String, minlength: 8 },
  country: { type: String, default: 'Nigeria' },
  state: { type: String, required: true },
  birth_record: Birth_Record
})

userSchema.plugin(passportLocalMongoose)
const User = mongoose.model('User', userSchema)

module.exports = User
