const express = require('express')
const {registerUser, getUserProfile} = require('./logic')
const router = express.Router();

router.post('/register', registerUser);
router.get('/profile/:username', getUserProfile);

module.exports = router;