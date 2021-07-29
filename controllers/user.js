const express = require('express')
const UserModel = require('../models/user')
const registerUser = (req, res, next) => {
    console.log(req.body)
    const user = UserModel({
        username: req.body.username,
        age: req.body.age,
    })
    user.save().then(success => {
        res.status(200).send("User was successfully registered!");
    }).catch((err) => {
        res.status(500).send("Something went wrong")
    })
}
exports.registerUser = registerUser;

const getUserProfile = (req, res, next) => {
    UserModel.findOne({ username: req.params.username})
    .then( user => {
        res.status(200).send(user);
    })
    .catch((err) => {
        res.status(400).send("User not found!")
    })
}
exports.getUserProfile = getUserProfile;