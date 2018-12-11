const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  name: String,
  locationName: String,
  positionDescription: String,
  timePeriod: Date,
  region: String,
  companyUrn: Number,
  _receiver: { type: Schema.Types.ObjectId, ref: 'Receiver' },
  _company: { type: Schema.Types.ObjectId, ref: 'Company' }
});

mongoose.model('positions', positionSchema);

module.exports = positionSchema;
