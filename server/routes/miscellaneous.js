const express = require('express')
const router = express.Router()

const miscellaneousController = require('../controllers/miscellaneous')

router.post('/city', miscellaneousController.citySearch)


module.exports = router