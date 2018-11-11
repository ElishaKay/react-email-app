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

   app.post('/api/profile-data', async (req, res) => {
    console.log("req.body: ",req.body)

    res.send({success: true}});
  });

  app.post('/update_tag_to_connection', async (req, res) => {
    console.log('req.body in update_tag_to_connection route', req.body);

    let numOfLoops=0;

    let updateReceiverTag = function(){
       Receiver.update(
          { publicIdentifier: req.body.connection_id }, 
          { $push: { licampaigns: req.body.tags, liusers: req.body.user_id} },
          function(err,numAffected) {
            if(numAffected.nModified==0 && numOfLoops<10){
              console.log('numAffected===0 loop with: ', req.body.connection_id);
              console.log('numOfLoops: ', numOfLoops);
              numOfLoops++;
              setTimeout(function(){ updateReceiverTag(); }, 3000);

            }
            console.log('numAffected: ', numAffected);
             // something with the result in here
          }
       );
    }

    updateReceiverTag();

    res.send(req.body);

  });
  

  app.post('/add_profile', async (req, res) => {
    console.log('req.body in receivers route', req.body);

    let receiversQueryResult;

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

    let getReceivers = async () => {
      receiversQueryResult = await Receiver.find({ publicIdentifier: publicIdentifier });
      console.log(receiversQueryResult);
      if(receiversQueryResult.length==0){
        console.log('nobody found, so we need to create a new record here.');
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
                  skills: skills? skills.split(',').map(skill => { 
                    skill = skill.split('||');
                    return { skill: skill[0], rating: skill[1]};
                  }): '',
                  dateAccepted: Date.now()
                });

                try {
                  // await receiver.save();

                  await receiver.save();
                  res.send({"success":"Profile saved"});
                } catch (err) {
                  res.status(422).send(err);
                }
      //end of logic for creating a new receiver record
      } else {
        console.log('receiver found, so only edit the email column');
        Receiver.update(
            { publicIdentifier: publicIdentifier }, 
            { $set: { email: email} },
            function(err,numAffected) {
              if (err){
                console.log('err within updateReceiver func: ',err);
              } else{
                res.send({"success":"Profile saved"});
              }
            }
         );
      }
    }

    getReceivers();
  });
};


