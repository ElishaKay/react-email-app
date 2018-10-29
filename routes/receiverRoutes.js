const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Receiver = mongoose.model('receivers');

module.exports = app => {

  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

  app.get('/api/receivers', async (req, res) => {
    const receivers = await Receiver.find({ _user: req.user.id }).select({
      recipients: false
    });

    res.send(receivers);
  });

  app.post('/add_profile', async (req, res) => {
    console.log('req.body in receivers route', req.body);

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

    const receiver = {
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
      dateAccepted: Date.now()
    };

    console.log('receiver: ',receiver);

    // Great place to send an email!


    try {
      // await receiver.save();

      var query = {'publicIdentifier':publicIdentifier};
      
      Receiver.findOneAndUpdate(query, receiver, {upsert:true}, function(err, doc){
        if (err) return console.log({ error: err });
        console.log("succesfully saved");
      });
    } catch (err) {
      res.status(422).send(err);
    }

    // res.send(user);
   
  });
};
