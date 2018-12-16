const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  entityUrn: String,
  companyName: String,
  locationName: String,
  title: String,
  positionDescription: String,
  timePeriod: Object,
  profileId: String,
  companyUrn: Number,
  dateSaved: Date
});

mongoose.model('positions', positionSchema);
