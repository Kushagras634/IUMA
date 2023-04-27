const mongoose = require('mongoose');
const addressSchema = require('./address'); 

// const addressSchema = new mongoose.Schema({
//   street: { type: String, required: true },
//   houseNumber: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true }
// });

const HospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    address: { type: addressSchema, required: true },
    registrationNumber: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    licenseIssuingAuthority: { type: String, required: true },
    licenseExpirationDate: { type: Date, required: true },
    facilities: { type: [String], required: true },
    profession: {type: String, required: true},
  }, { collection: 'users' });

const Hospital = mongoose.model('hospital', HospitalSchema);

module.exports = Hospital;
