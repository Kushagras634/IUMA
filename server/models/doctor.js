const mongoose = require("mongoose");
const addressSchema = require('./address'); 

const DoctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String },
  address: { type: addressSchema, required: true },
  specialization: { type: String },
  medicalLicenseNumber: { type: String },
  licenseIssuingAuthority: { type: String },
  licenseExpirationDate: { type: Date },
  qualifications: { type: String },
  practiceName: { type: String },
  practiceLocation: { type: String },
  yearsOfExperience: { type: Number },
  profession: {type: String, required: true},
}, { collection: 'users' }  );

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
