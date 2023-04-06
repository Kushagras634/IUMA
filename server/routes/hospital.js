const express = require('express')
const router = express.Router()

const hospitalController = require('../controllers/hospital')

router.post('/signup', hospitalController.signup)
// router.post('/login', patientController.login)

module.exports = router