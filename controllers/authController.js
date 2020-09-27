const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.userAuthenticate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(
      {
        errors: errors.array()
      }
    )
  };
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User does not exists' });
    const validatePass = await bcryptjs.compare(password, user.password);
    if (!validatePass) return res.status(400).json({ msg: 'Wrong password' });
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600
    }, (error, token) => {
      if (error) throw error;
      res.json({email, token});
    });
  } catch(error) {
    console.log(error)
  }
}