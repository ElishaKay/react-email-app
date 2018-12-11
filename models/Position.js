const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  name: String,
  locationName: String,
  title: String,
  positionDescription: String,
  timePeriod: Object
});

mongoose.model('positions', positionSchema);
