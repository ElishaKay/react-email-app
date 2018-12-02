const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/sendEmail', requireLogin, async (req, res) => {
   
    req.user.credits += 25;
    const user = await req.user.save();

    res.send(user);
  });
};
