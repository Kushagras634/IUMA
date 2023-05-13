const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login')
const registerController = require('../controllers/register')
const seedController = require('../seed/patientSeed')

router.post('/login', loginController.Login)
// router.post('/user', loginController.AuthenticatedUser)
// router.post('/refresh', loginController.RefreshToken)
router.post('/register', registerController.register)
router.post('/seed', seedController.seedPatient)


module.exports = router