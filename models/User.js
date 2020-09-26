const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  profilePhoto: {
    type: String,
    default: 'https://facebook.com/asjds/'
  }
});

module.exports = mongoose.model('Usuario', UsersSchema)