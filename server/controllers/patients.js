const Patient = require("../models/patient");
const bcrypt = require("bcrypt");

exports.getTestResults = async (req, res)=>{
  const {email} = req.body;
  console.log(email)
  try {
    const user = await Patient.findOne({email: email});
    if(!user){
      console.log(user)
      return res.status(201).send({
        message: "Email not found",
      });
    }
    res.send({
      message: "Test Results",
      tests:[...user.laboratory]  
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: "An error occurred while finding the patient",
    });
  }
}