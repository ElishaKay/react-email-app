const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
 
// If modifying these scopes, delete your previously saved credentials
// at TOKEN_DIR/gmail-nodejs.json
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
 
// Change token directory to your system preference
var TOKEN_DIR = (__dirname+'/');
var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs.json';
 
var gmail = google.gmail('v1');
 
// Authorize a client with the loaded credentials, then call the
// Gmail API.


authorize(listLabels);
 
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(callback) {
    var clientSecret = process.env.CLIENT_SECRET;
    var clientId = process.env.CLIENT_ID;
    var redirectUrl = process.env.REDIRECT_DOMAIN;
 
    var OAuth2 = google.auth.OAuth2;
 
    var oauth2Client = new OAuth2(clientId, clientSecret,  redirectUrl);
    console.log('oauth2Client: ',oauth2Client)
 
    let token = {access_token: "ya29.GmB6BsbAouAI0wpYmmL77RzC2sfcZ6d8xsFFqyPxKxVbbiDXbNNrbzH2jQJDHL8jzW91Yx2mjJgU1xVy7GemJSa7VmAMXYycN-A6kkdLm8sGlOVDRcOKcucWYr_Odp4M1fk",
                  scope: "https://www.googleapis.com/auth/gmail.readonly",
                  token_type: "Bearer"};

      oauth2Client.credentials = token;
      callback(oauth2Client);
}
 
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({access_type: 'offline', scope: SCOPES});
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);

      console.log('oauth2Client: ',oauth2Client);
      console.log('callback: ',callback)

      callback(oauth2Client);
    });
  });
}
 
/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  console.log('heres the token: ',token)

  // try {
  //   fs.mkdirSync(TOKEN_DIR);
  // } catch (err) {
  //   if (err.code != 'EEXIST') {
  //     throw err;
  //   }
  // }
  // fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  // console.log('Token stored to ' + TOKEN_PATH);
}
 
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


module.exports = app => {
  app.post('/api/sendEmail', requireLogin, async (req, res) => {
    
    let {accessToken} = req.user;


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
