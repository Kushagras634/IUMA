const Hospital = require("../models/hospital");
const Patient = require("../models/patient");
const Pharmacy = require("../models/pharmacy");
const Laboratory = require("../models/laboratory");
const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  let patient, hospital, pharmacy, doctor, laboratory;

  try {
    if (req.body.profession == "patient") {
      patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        profession: req.body.profession,
        address: {
          street: req.body.street,
          houseNumber: req.body.houseNumber,
          city: req.body.city,
          state: req.body.state,
        },
      });
      var user = await Patient.findOne({ email: req.body.email });
    } else if (req.body.profession == "hospital") {
    } else if (req.body.profession == "doctor") {
    } else if (req.body.profession == "laboratory") {
    } else if (req.body.profession == "pharmacy") {
    }

    if (user) {
      console.log("Email Already Exists");
      return res.status(201).json({
        message: "Email alredy exists",
      });
    }

    const hashedPassword = await bcrypt.hash(patient.password, 10);

    patient.password = hashedPassword;
    console.log(patient, "hello");
    await patient
      .save()
      .then(() =>
         res.status(201).json({
          message: "Patient created",
        })
      )
  } catch (error) {
    // console.log('error')
    res.status(400).json({
      message: error,
    });
  }
};
