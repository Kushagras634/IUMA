const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login')
const registerController = require('../controllers/register')

router.post('/login', loginController.Login)
router.post('/user', loginController.AuthenticatedUser)
router.post('/refresh', loginController.RefreshToken)
router.post('/register', registerController.register)


module.exports = router