const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/sendEmail', requireLogin, async (req, res) => {
   
    /**
     * Lists the labels in the user's account.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
     
    function listLabels(auth) {
      gmail.users.labels.list({auth: auth, userId: 'me',}, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
     
        var labels = response.data.labels;
     
        if (labels.length == 0) {
          console.log('No labels found.');
        } else {
          console.log('Labels:');
          for (var i = 0; i < labels.length; i++) {
            var label = labels[i];
            console.log('%s', label.name);
          }
        }
      });
    }

    /**
     * Get the recent email from your Gmail account
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    function getRecentEmail(auth) {
        // Only get the recent email - 'maxResults' parameter
        gmail.users.messages.list({auth: auth, userId: 'me', maxResults: 1,}, function(err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return;
            }
     
          // Get the message id which we will need to retreive tha actual message next.
          var message_id = response['data']['messages'][0]['id'];

          // Retreive the actual message using the message id
          gmail.users.messages.get({auth: auth, userId: 'me', 'id': message_id}, function(err, response) {
              if (err) {
                  console.log('The API returned an error: ' + err);
                  return;
              }

              // Access the email body content, like this...
              message_raw = response['data']['payload']['parts'][0].body.data;
               
              // or like this
              message_raw = response.data.payload.parts[0].body.data;

              data = message_raw;  
              buff = new Buffer(data, 'base64');  
              text = buff.toString();
              console.log(text);
     
             console.log(response['data']);
          });
        });
    }


    function makeBody(to, from, subject, message) {
        var str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
            "MIME-Version: 1.0\n",
            "Content-Transfer-Encoding: 7bit\n",
            "to: ", to, "\n",
            "from: ", from, "\n",
            "subject: ", subject, "\n\n",
            message
        ].join('');

        var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
            return encodedMail;
    }

    function sendMessage(auth) {
        var raw = makeBody('alephmarketingpros@gmail.com', 'alephmarketingpros@gmail.com', 'test subject', 'test message');
        gmail.users.messages.send({
            auth: auth,
            userId: 'me',
            resource: {
                raw: raw
            }
        }, function(err, response) {
            res.send(err || response)
        });
    }



    const user = await req.user.save();

    res.send(user);
  });
};
