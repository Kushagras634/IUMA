const mongoose = require('mongoose');
const addressSchema = require('./address'); 

const PharmacySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    address: { type: addressSchema, required: true },
    registrationNumber: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    licenseIssuingAuthority: { type: String, required: true },
    licenseExpirationDate: { type: Date, required: true },
    facilities: [{ type: String, required: true }],
    termsAndConditionsAccepted: { type: Boolean, required: true },
    captchaVerified: { type: Boolean, required: true }
  });


const Pharmacy = mongoose.model('Pharmacy', PharmacySchema);

module.exports = Pharmacy;
