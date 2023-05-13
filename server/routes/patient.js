const express = require('express')
const router = express.Router()

const patientController = require('../controllers/patients')

router.post('/getlab', patientController.getTestResults)
// router.post('/user', loginController.AuthenticatedUser)
// router.post('/refresh', loginController.RefreshToken)
// router.post('/register', registerController.register)
// router.post('/seed', seedController.seedPatient)


module.exports = router