const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  name: String,
  timePeriod: Date
});

module.exports = positionSchema;
