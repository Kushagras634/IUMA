const mongoose = require("mongoose");

// const addressSchema = new mongoose.Schema({
//   street: { type: String, required: true },
//   houseNumber: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true }
// });

const AppointmentSchema = new mongoose.Schema(
  {
    patientEmail: {
      type: String,
      ref: "Patient",
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    patientPhone: {
      type: String,
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "confirmed", "canceled", "completed"],
      default: "booked",
    },
  },
  { collection: "appointments" }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
