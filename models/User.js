const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 30 },
  displayName: String,
  familyName: String,
  givenName: String,
  gender: String,
  email: String,
  photo: String,
  accessToken: String
});

mongoose.model('users', userSchema);
