const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

connectDB();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('servidor corriendo');
})