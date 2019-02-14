const express = require('express')
const router = express.Router()

const appController = require('../controllers/app')

router.get('/', appController.login)

// Render the dashboard
router.get('/dashboard', appController.dashboard)

module.exports = router