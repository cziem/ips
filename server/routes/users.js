const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

// Get all the Users
router.get('/', userController.get_users)

// Get the Registration Form
router.get('/new', userController.register)

// Handle Registration request
router.post('/register', userController.add_new_user)

// Handle login request
router.post('/login', userController.user_login)

module.exports = router