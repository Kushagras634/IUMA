require('dotenv').config({ path: './config.env' });

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));


// get MongoDB driver connection
const conn = require('./db/conn');

const bodyParser = require('body-parser');

const patientRoutes = require('./routes/paitents')


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


app.listen(8000, () => {
    console.log('Server started on port 8000');
});

app.get('/', () => {
    console.log("Welcome to server")
})