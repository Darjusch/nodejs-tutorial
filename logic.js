const express = require('express')

const registerUser = (req, res, next) => {
    res.status(200).json({message: "User was successfully created!"});
}
exports.registerUser = registerUser;
const getUserProfile = (req, res, next) => {
    res.status(200).json({message: "John Howard!"});
}
exports.getUserProfile = getUserProfile;