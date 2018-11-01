const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
  skill: String,
  rating: Number
});

module.exports = skillSchema;
