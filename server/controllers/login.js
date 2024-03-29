const Patient = require("../models/patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Patient.findOne({ email: email });
    if (!user) {
      console.log(user);
      return res.status(201).send({
        message: "Patient not found",
      });
    }
    // console.log(password, user)

    // Check if password is correct
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(201).send({
        message: "Invalid password",
      });
    }

    const accessToken = jwt.sign(
      {
        id: user._id.toString(),
      },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "1d" }
    );
    const temp = {
      message: "Login Successful",
      name: user.fullName || user.name,
      id: user._id,
      token: accessToken,
      email: user.email,
      profession: user.profession,
    };
    console.log(Object.keys(user),user, temp);

    res.send(temp);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "An error occurred while finding the patient",
    });
  }
};
