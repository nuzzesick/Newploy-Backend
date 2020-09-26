const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json({ extend: true }));

const port = process.env.PORT || 4000;

app.use(cors({ // CORS setup
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204,
    'allowHeaders': 'authorization,Authorization',
    'exposedHeaders': 'authorization,Authorization'
}));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, '0.0.0.0', () => {
  console.log('server running');
});