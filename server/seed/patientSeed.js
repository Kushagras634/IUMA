const faker = require("@faker-js/faker/locale/en_IND");
const mongoose = require("mongoose");
const Patient = require("../models/patient");
const bcrypt = require("bcrypt");

exports.seedPatient =  async function seedPatient(req, res) {
  console.log("In seed function")
  const patients = [];
  const temp = {
    name: "Aarav Patel",
    email: "patient@gmail.com",
    password: await bcrypt.hash("hello2000", 10),
    dateOfBirth: "1990-06-15",
    mobile: 9876543210,
    profession: "Software Developer",
    gender: "Male",
    address: {
      street: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
    weight: 70,
    height: 170,
    bloodPressure: "120/80",
    temperature: 98.6,
    pulseCount: 75,
    spO2: 95,
    pharmacy: [
      {
        name: "ABC Pharmacy",
        phone: "+91 98765 43210",
        address: {
          street: "456 Elm Street",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400002",
        },
        prescriptionHistory: [
          {
            name: "Medicine A",
            dosage: "2 Times a Day",
            dateFilled: "2022-01-01",
            doctor: "Dr. Rajesh Gupta",
          },
          {
            name: "Medicine B",
            dosage: "1 Time a Day",
            dateFilled: "2022-03-01",
            doctor: "Dr. Neha Sharma",
          },
          {
            name: "Medicine C",
            dosage: "3 Times a Day",
            dateFilled: "2022-05-01",
            doctor: "Dr. Rakesh Singh",
          },
          {
            name: "Medicine D",
            dosage: "1 Time a Day",
            dateFilled: "2022-07-01",
            doctor: "Dr. Sneha Patel",
          },
        ],
      },
    ],
    laboratory: [
      {
        name: "XYZ Labs",
        phone: "+91 98765 43210",
        address: {
          street: "789 Oak Street",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400003",
        },
        testResults: [
          {
            name: "Blood Sugar",
            date: "2021-01-15",
            result: "120 mg/dL",
          },
          {
            name: "Cholesterol",
            date: "2021-05-15",
            result: "220 mg/dL",
          },
          {
            name: "Hemoglobin",
            date: "2021-09-15",
            result: "14 g/dL",
          },
          {
            name: "Thyroid Stimulating Hormone (TSH)",
            date: "2022-01-15",
            result: "3.5 uIU/mL",
          },
        ],
      },
    ],
    hospital: [
      {
        name: "City Hospital",
        phone: "+91 98765 43210",
        address: {
          street: "101 First Avenue",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400004",
        },
        admissionHistory: [
          {
            dateAdmitted: "2020-03-01",
            dateDischarged: "2020-03-07",
            reason: "Pneumonia",
          },
          {
            dateAdmitted: "2021-04-15",
            dateDischarged: "2021-04-20",
            reason: "Appendicitis",
          },
          {
            dateAdmitted: "2022-02-05",
            dateDischarged: "2022-02-10",
            reason: "Kidney Stones",
          },
          {
            dateAdmitted: "2022-04-01",
            dateDischarged: "2022-04-05",
            reason: "Food Poisoning",
          },
        ],
      },
    ],
  };
  patients.push(temp)

  Patient.insertMany(patients)
    .then(() => console.log(`fake patients generated successfully!`))
    .catch((err) => console.error(err));
}


