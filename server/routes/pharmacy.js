const express = require('express')
const router = express.Router()

const pharmacyController = require('../controllers/pharmacy')

router.post('/signup', pharmacyController.signup)
// router.post('/login', patientController.login)

module.exports = router