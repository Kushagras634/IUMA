const express = require('express')
const router = express.Router()

const laboratoryController = require('../controllers/laboratory')

router.post('/signup', laboratoryController.signup)
// router.post('/login', patientController.login)

module.exports = router