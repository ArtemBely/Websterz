const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameResult = new Schema({
  scores_final: {type: String, required: true},
  scores_final2: {type: String, required: true},
  kill_final: {type: String, required: true},
  time_final: {type: String, required: true},
  team_kill_final: {type: String, required: true},
  kd_final: {type: String, required: true},
  actualGameFinished: {type: String, required: true}
});

module.exports = mongoose.model('Results', gameResult);
