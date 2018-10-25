// For saving LinkedIn Receivers from LinkedIn-Chrome Extension

const mongoose = require('mongoose');
const { Schema } = mongoose;
const SkillSchema = require('./Skill');

const receiverSchema = new Schema({
  {
firstName: String,
lastName: String,
entityUrn: String,
objectUrn: Number,
headline: String,
publicIdentifier: String,
industryCode: Number,
picture: String,
trackingId: String,
locationName: String,
postalCode: Number,
versionTag: Number,
schoolName: String,
fieldOfStudy: String,
title: String,
companyName: String,
languages: String,
skills: [SkillSchema],
email: String,
phone: String,
_user: { type: Schema.Types.ObjectId, ref: 'User' },
dateAccepted: Date
});

mongoose.model('receivers', receiverSchema);