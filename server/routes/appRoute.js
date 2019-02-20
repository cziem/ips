const express = require('express')
const router = express.Router()

const appController = require('../controllers/app')
const { isLoggedIn } = require('../middleware/auth')

router.get('/', appController.login)

// Render the dashboard
router.get('/dashboard', isLoggedIn, appController.dashboard)

router.get('/profile/:username', isLoggedIn, appController.profile)

module.exports = router