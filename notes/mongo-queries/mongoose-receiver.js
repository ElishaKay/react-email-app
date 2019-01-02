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
    console.log('receiver found');
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

