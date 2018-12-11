const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  companyName: String,
  locationName: String,
  title: String,
  positionDescription: String,
  timePeriod: Object,
  profileId: String,
  companyUrn: Number
});

mongoose.model('positions', positionSchema);
