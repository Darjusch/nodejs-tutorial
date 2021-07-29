const express = require('express')

const registerUser = (req, res, next) => {
    res.status(200).send("User was successfully registered!");
}
exports.registerUser = registerUser;
const getUserProfile = (req, res, next) => {
    res.status(200).send("John Howard!");
}
exports.getUserProfile = getUserProfile;