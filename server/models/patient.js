// const mongoose = require('mongoose');

// const PatientSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     mobile: { type: Number, required: true },
//     profession: {type: String, required: true},
//     address: {
//         street: { type: String, required: true },
//         houseNumber: { type: String, required: true },
//         city: { type: String, required: true },
//         state: { type: String, required: true }
//     }
// }, { collection: 'users' });
const mongoose = require("mongoose");
const addressSchema = require("./address");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    mobile: { type: Number, required: true },
    profession: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    address: {
      type: addressSchema,
      required: true,
    },
    weight: { type: Number },
    height: { type: Number },
    bloodPressure: { type: String },
    temperature: { type: Number },
    pulseCount: { type: Number },
    spO2: { type: Number },
    pharmacy: [
      {
        name: {
          type: String,
          required: true,
          default: "Pharmacy XYZ",
        },
        phone: {
          type: String,
          required: true,
          default: "+91 xxxx xxxx xx",
        },
        address: {
          type: addressSchema,
          required: true,
        },
        prescriptionHistory: [
          {
            name: {
              type: String,
              required: true,
              default: "Medicine Y",
            },
            dosage: {
              type: String,
              required: true,
              default: "2 Times a Day",
            },
            dateFilled: {
              type: Date,
              required: true,
              default: "01 Jan, 2022",
            },
            doctor: {
              type: String,
              required: true,
              default: "Dr. Jhon Doe",
            },
          },
        ],
      },
    ],
    laboratory: [
      {
        name: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        address: {
          type: addressSchema,
          required: true,
        },
        testResults: [
          {
            name: {
              type: String,
              required: true,
            },
            date: {
              type: Date,
              required: true,
            },
            result: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    hospital: [
      {
        name: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        address: {
          type: addressSchema,
          required: true,
        },
        admissionHistory: [
          {
            dateAdmitted: {
              type: Date,
              required: true,
            },
            dateDischarged: {
              type: Date,
              required: true,
            },
            reason: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { collection: "users" }
);

// module.exports = mongoose.model("Patient", patientSchema);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
