const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login')

router.post('/', loginController.login)
// router.post('/login', patientController.login)

module.exports = router