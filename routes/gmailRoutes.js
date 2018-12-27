const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
const countdown = require('../services/emailTemplates/countdown');
 
// If modifying these scopes, delete your previously saved credentials
// at TOKEN_DIR/gmail-nodejs.json
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
 
var gmail = google.gmail('v1');



module.exports = app => {
  
     /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     *
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
  function authorize(accessToken, callback) {
      var clientSecret = process.env.CLIENT_SECRET;
      var clientId = process.env.CLIENT_ID;
      var redirectUrl = process.env.REDIRECT_DOMAIN;
   
      var OAuth2 = google.auth.OAuth2;
   
      var oauth2Client = new OAuth2(clientId, clientSecret,  redirectUrl);
      console.log('oauth2Client: ',oauth2Client)
   
      let token = {access_token: accessToken,
                    scope: "https://www.googleapis.com/auth/gmail.readonly",
                    token_type: "Bearer"};

        oauth2Client.credentials = token;
        callback(oauth2Client);
  }

  app.get('/api/checkGmailLabels', requireLogin, async (req, res) => {
    
    // Authorize a client with the loaded credentials, then call the
    // Gmail API.
    authorize(req.user.accessToken, listLabels);
     
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


    res.send({success: true});
  }); 

  app.get('/api/getRecentEmail', requireLogin, async (req, res) => {
    authorize(req.user.accessToken, getRecentEmail);

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

    res.send({success: true});
  }); 
    

  app.get('/api/sendEmail', requireLogin, async (req, res) => {
    authorize(req.user.accessToken, sendMessage);


    function makeBody(to, from, subject, message) {
        var str = ["Content-Type: text/html; charset=\"UTF-8\"\n",
            "MIME-Version: 1.0\n",
            "Content-Transfer-Encoding: 7bit\n",
            "to: ", to, "\n",
            "from: ", from, "\n",
            "subject: ", subject, "\n\n",
            message
        ].join('');

        var encodedMail = Buffer.from(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
            return encodedMail;
    }

    

    function sendMessage(auth) {
        let message = countdown();

        var raw = makeBody('alephmarketingpros@gmail.com', 'alephmarketingpros@gmail.com', 'test subject', message);
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

    res.send({success: true});
  });
};
