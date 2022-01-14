const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const customer = new Schema({
  email: {type: String, required: true},
  password: {type: String, unique: true, required: true},
  scores: {type: String},
  admin: {type: String},
  votation: {type: Array},
  arrayOfResults: {type: Array},
  resetPasswordToken: {type: String},
  resetPasswordExpires: {type: Date}
});

customer.pre('save', function(next){
    var user = this;
    if (!this.isModified('password') || this.isNew) return next();

    bcrypt.genSalt(10, function(err, salt){
        if (err){ return next(err) }

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err){return next(err)}

            user.password = hash;
            console.log(user);
            next();
        })
   })
});

module.exports = mongoose.model('Customer', customer);

module.exports.createUser = function(newUser, callback) {
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {

    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
