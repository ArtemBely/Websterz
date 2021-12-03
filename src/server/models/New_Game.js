const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newGame = new Schema({
  nameOfEnemy: {type: String, required: true},
  logoOfEnemy: {type: String, required: true},
  linkToGame: {type: String, required: true},
  startOfGame: {type: String, required: true},
  scoresOfGame: {type: String, required: true},
  firstKillOfGame: {type: String, required: true},
  timeOfGame: {type: String, required: true},
  killsOfTeam: {type: String, required: true},
  kdOfTeam: {type: String, required: true},
  randomGameId: {type: String}
});

module.exports = mongoose.model('New_Game', newGame);
