require("dotenv").config({ path: ".env.local"} );

const express = require("express");
const app = express();

const cors = require("cors");

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// get MongoDB driver connection
const conn = require("./db/conn");

const bodyParser = require("body-parser");

// const patientRoutes = require("./routes/paitents");
const loginRoute = require("./routes/login");
const miscellaneousRoute = require("./routes/miscellaneous");
const appointmentRoute = require('./routes/appointments')
conn.on("error", (error) => {
  console.log(`MongoDB connection error: ${error}`);
});

conn.on("open", () => {
  console.log("MongoDB Connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// your routes goes here
// app.use("/patient", patientRoutes);
app.use("/auth", loginRoute);
app.use("/miscellaneous", miscellaneousRoute);
app.use("/appointment", appointmentRoute)

app.use(express.static("build"));

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.get("/", () => {
  console.log("Welcome to server");
});
