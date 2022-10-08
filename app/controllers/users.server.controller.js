const mongoose = require('../../config/mongoose');
const User = require('../models/user.server.model')

exports.create = function (req, res, next) {
    let dudu = {
        firstname: "Dudu",
        lastname: "Missono",
        email: "eduartem@my.centennialcollege.ca",
        username: "dudumissono",
        password: "admin123"
    };

    const user = new User(dudu);

    user.save((err) => {
        if (err) {
            console.log('not saved');
            return next(err);
        } else {
            console.log('saved');
            res.status(200).json(user);
        }
    });
}

exports.list = function (req, res, next) {
    // User.findOne({ firstname: "Bob" }, (err, users) => {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(users)
        }
    })
}