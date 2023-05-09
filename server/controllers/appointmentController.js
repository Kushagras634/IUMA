// const { db } = require("../models/doctor");

const conn = require("../db/conn");
const Appointment = require("../models/appointments");
const ObjectId = require("mongodb").ObjectId;

exports.BookAppointment = async (req, res) => {
  // const {patientEmail, doctorId, date, time, status} = req.body;
  console.log(req.body)
  const appointment = new Appointment(req.body)
  console.log(appointment)
  appointment.save()
  .then((data)=>{
    console.log(data)
    res.send("Appointment Booked")
  })
  .catch(err=>{
    console.log(err)
    res.status(400).send("Error in booking appointment")
  })
};

exports.SearchDoctors = async (req, res) => {
  const { speciality, location } = req.body;
  console.log(req.body);
  // if (!speciality || !location) {
  //   return res.status(200).json({ error: "Missing search query" });
  // }
  try {
    const doctors = await conn
      .collection("users")
      .find({
        $and: [
          { specialization: { $eq: speciality } },
          { practiceLocation: new RegExp(location, "i") },
        ],
      })
      .toArray();
    res.json(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getDoctor = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  conn
    .collection("users")
    .findOne({ _id: new ObjectId(id) })
    .then((data) => {
      // console.log(data);
      if (data) {
        res.status(201).send(data);
      } else {
        res.status(500).send("Error");
      }
    });
};
