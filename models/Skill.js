const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
  skill: String
});

module.exports = skillSchema;
