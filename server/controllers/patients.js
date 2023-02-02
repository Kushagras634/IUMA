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
        // console.log("Error : ", err)
        // console.log("Existing Patient : " , existingPatient )    
        if (existingPatient) {
            console.log("Email Already Exists")
            // return res.status(400).send({
            //     message: "Email alredy exists",
            //     error: err
            // })
            return res.status(401).send('Email already Exists');
        }
        else {
            bcrypt.hash(patient.password, 10, function (err, hash) {
                if (err) {
                    // return res.status(500).json({
                    //     message: "Error hashing password",
                    //     error: err
                    // })
                }
                else {
                    patient.password = hash
                    patient.save((err, result) => {
                        if (err) {
                            // return res.status(500).json({
                            //     message: "Error saving patient",
                            //     error: err
                            // })
                        }
                        // return res.status(201).json({
                        //     message: 'Patient created',
                        // })
                    })
                }

            })
        }
    })



}