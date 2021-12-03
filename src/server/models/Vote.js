const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votation = new Schema({
  score1: {type: String},
  score2: {type: String},
  firstKill: {type: String},
  minutes: {type: String},
  kills: {type: String},
  bestKd: {type: String},
  actGameId: {type: String}
});

module.exports = mongoose.model('Votation', votation);
