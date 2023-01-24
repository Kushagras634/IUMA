const Patient = require('../models/patient')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {

    let patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        address: {
            street: req.body.street,
            houseNumber: req.body.houseNumber,
            city: req.body.city,
            state: req.body.state
        }
    })
    console.log(req.body)

    Patient.findOne({ email: req.body.email }, (err, existingPatient) => {
        if (existingPatient) {
            return res.status(409).json({
                message: "Email alredy exists"
            })
        }
    })

    bcrypt.hash(patient.password, 10, function (err, hash) {
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: "Error hashing password",
                error: err
            })
        }
        patient.password = hash
    })
    patient.save((err, result) => {
        console.log(err)
        if (err) {
            return res.status(500).json({
                message: "Error saving patient",
                error: err
            })
        }
        res.status(201).json({
            message: 'Patient created',
        })
    })
}