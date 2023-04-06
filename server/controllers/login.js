const Patient = require("../models/patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {

  const {email, password} = req.body

  Patient.findOne({ email: email }, async (err, patient) => {
    if (err) {
      return res.status(500).send({
        message: "An error occurred while finding the patient",
        error: err,
      });
    }

    if (!patient) {
      return res.status(201).send({
        message: "Patient not found",
      });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(
      password,
      patient.password
    );
    if (!passwordMatch) {
      return res.status(201).send({
        message: "Invalid password",
      });
    }

    // Create JWT token
    const token = jwt.sign({ id: patient._id, email  }, process.env.JWT_SECRET,{expiresIn: '3h'} );

    return res.status(200).send({
      message: "Patient logged in successfully",
      token: token,
      email: email,
    });
  });
};
