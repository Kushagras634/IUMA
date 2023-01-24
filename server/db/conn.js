const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect (process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection

conn.on('error', (error) => {
  console.log(`MongoDB connection error: ${error}`);
});

conn.once('open', () => {
  console.log('MongoDB Connected');
});

module.exports = conn;
