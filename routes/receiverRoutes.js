const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Receiver = mongoose.model('receivers');

module.exports = app => {
  app.get('/api/receivers', async (req, res) => {
    const receivers = await Receiver.find({ _user: req.user.id }).select({
      recipients: false
    });

    res.send(receivers);
  });

  app.post('/add_profile', async (req, res) => {
    const {  firstName,
              lastName,
              entityUrn,
              objectUrn,
              headline,
              publicIdentifier,
              industryCode,
              picture,
              trackingId,
              locationName,
              postalCode,
              versionTag,
              schoolName,
              fieldOfStudy,
              title,
              companyName,
              languages,
              email,
              phone,
              skills } = req.body;

    const receiver = new Receiver({
      firstName,
      lastName,
      entityUrn,
      objectUrn,
      headline,
      publicIdentifier,
      industryCode,
      picture,
      trackingId,
      locationName,
      postalCode,
      versionTag,
      schoolName,
      fieldOfStudy,
      title,
      companyName,
      languages,
      email,
      phone,
      skills: skills.split(',').map(skill => ({ skill: skill.trim() })),
      _user: req.user.id,
      dateAccepted: Date.now()
    });

    console.log('receiver: ',receiver);

    // Great place to send an email!


    try {
      await receiver.save();
    } catch (err) {
      res.status(422).send(err);
    }

    // res.send(user);
   
  });
};
