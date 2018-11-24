const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.get('/', userController.get_users)
router.post('/add_new', userController.add_new_user)
router.post('/user_login', userController.user_login)

module.exports = router