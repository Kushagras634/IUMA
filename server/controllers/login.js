const Patient = require("../models/patient");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Patient.findOne({ email: email });
    if (!user) {
      console.log(user)
      return res.status(201).send({
        message: "Patient not found",
      });
    }
    console.log(password, user)

    // Check if password is correct
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }

    const accessToken = jwt.sign(
      {
        id: user._id.toString(),
      },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "30s" }
    );

    const refreshToken = jwt.sign(
      {
        id: user._id.toString(),
      },
      `${process.env.REF_SECRET}`,
      { expiresIn: "1w" }
    );

    res.cookie(`accessToken`, accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie(`refreshToken`, refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.send({
      message: "Login Successful",
      user,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: "An error occurred while finding the patient",
    });
  }
};



exports.AuthenticatedUser = async (req, res) => {
  try {
    const accessToken = req.cookies["accessToken"];

    const payload = jwt.verify(accessToken, `${process.env.JWT_SECRET}`);
    // console.log(payload);
    if (!payload) {
      return res.status(401).send({
        message: "unauthenticated",
      });
    }

    const user = await Patient.findOne(payload._id);
    if (!user) {
      return res.status(401).json({ error: "User unauthenticated" });
    }

    res.send(user);
  } catch (error) {
    return res.status(401).send({
      message: "unauthenticated",
    });
  }
};

exports.RefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies["refreshToken"];
    console.log(refreshToken);
    const payload= verify(refreshToken, `${process.env.REF_SECRET}`);

    // console.log(payload);

    if (!payload) {
      return res.status(401).send({
        message: "unauthenticated",
      });
    }

    const accessToken = jwt.sign(
      {
        id: payload._id,
      },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "30s" }
    );

    res.cookie(`accessToken`, accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.send({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      message: "unauthenticated",
    });
  }
};

