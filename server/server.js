require('dotenv').config({ path: './config.env' });

const express = require('express');
const app = express();

const cors = require('cors');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// get MongoDB driver connection
const conn = require('./db/conn');

const bodyParser = require('body-parser');

const patientRoutes = require('./routes/paitents')
const loginRoute= require('./routes/login')


conn.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`);
});

conn.on('open', () => {
    console.log('MongoDB Connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// your routes goes here
app.use('/patient', patientRoutes);
app.use('/login', loginRoute)

app.use(express.static('build'));


app.listen(8000, () => {
    console.log('Server started on port 8000');
});

app.get('/', () => {
    console.log("Welcome to server")
})