db.receivers.aggregate( [
   { $match: { email: {$ne : ""} } },
   {
     $group: {
        _id: "$publicIdentifier",
        email: {$push: '$email'}
     }
   }
] )



CraCrt
db.collection.aggregate({$group: {_id: '$name', age: {$push: '$age'}}})


