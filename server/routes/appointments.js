const express = require('express')
const router = express.Router()

const appointmentController = require('../controllers/appointmentController')

router.post('/searchDoc', appointmentController.SearchDoctors);
router.post('/getDoc', appointmentController.getDoctor);
router.post('/bookAppointment', appointmentController.BookAppointment);
router.post('/getAppointments', appointmentController.getAppointments);




module.exports = router