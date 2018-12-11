const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  name: String,
  locationName: String,
  positionDescription: String,
  timePeriod: Date,
  region: String,
  companyUrn: Number
});

module.exports = positionSchema;
