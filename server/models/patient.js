const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: Number, required: true },
    profession: {type: String, required: true},
    address: {
        street: { type: String, required: true },
        houseNumber: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true }
    }
}, { collection: 'users' });


const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
