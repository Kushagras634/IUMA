const express = require('express')
const router = express.Router()

const doctorController = require('../controllers/doctors')

router.post('/signup', doctorController.signup)
// router.post('/login', patientController.login)

module.exports = router