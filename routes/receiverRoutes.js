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



  app.post('/add_profile', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    console.log(survey);

    // Great place to send an email!

    console.log('survey.recipients: ',survey.recipients);

    try {
      await survey.save();
    } catch (err) {
      res.status(422).send(err);
    }

    const user = await req.user.save();
    res.send(user);
   
  });
};
