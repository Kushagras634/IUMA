const Hospital = require("../models/hospital");
const Patient = require("../models/patient");
const Pharmacy = require("../models/pharmacy");
const Laboratory = require("../models/laboratory");
const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  let toregister;

  try {
    if (req.body.profession == "patient") {
      toregister = new Patient({
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
      console.log(req.body)
      toregister = new Doctor({
        fullName: req.body.fullName,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.mobile,
        profession: req.body.profession,
        address: {
          street: req.body['address.street'],
          houseNumber: req.body['address.houseNumber'],
          city: req.body['address.city'],
          state: req.body['address.state'],
          pincode: req.body['address.pincode']
        },
        specialization: req.body.specialization,
        yearsOfExperience: req.body.yearsOfExperience,
        medicalLicenseNumber: req.body.medicalLicenseNumber,
        licenseExpirationDate:req.body.licenseExpirationDate,
        licenseIssuingAuthority: req.body.licenseIssuingAuthority,
        qualifications: req.body.qualifications,
      });
      var user = await Patient.findOne({ email: req.body.email });
    } else if (req.body.profession == "laboratory") {
    } else if (req.body.profession == "pharmacy") {
    }

    if (user) {
      console.log("Email Already Exists");
      return res.status(201).json({
        message: "Email alredy exists",
      });
    }

    const hashedPassword = await bcrypt.hash(toregister.password, 10);

    toregister.password = hashedPassword;
    console.log(toregister, "hello");
    await toregister
      .save()
      .then(() =>
         res.status(201).json({
          message: "User created",
        })
      )
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: error,
    });
  }
};
