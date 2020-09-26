const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
// User create
router.post('/',
  [
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contains 8 chars').isLength({ min: 8 })
  ],
  authController.userAuthenticate
);

module.exports = router;