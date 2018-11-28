//mongo's query language is like linux piping.
//the output of one comman becomes the input of the next command
//Step 1: Find all elements whose email property is not a blank string.

// Step 2: group those records into a new result which outputs 
// the id and email properties - with these assigned values


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


----------------------

db.receivers.aggregate( [
   {
     $group: {
        _id: "$email",
        total: {$sum: 1}
     }
   }
] )


-------------------------

db.receivers.aggregate( [
   { $match: { email: {$ne : ""} } }
   
] )
-----------------------

Count the non-empty email columns per campaign

db.receivers.aggregate( [
   { $match: { email: {$ne : ""} } },
   {
     $group: {
        _id: "$licampaigns",
        total: {$sum: 1}
     }
   }
   
] )
-----------------------------------


Count the non-empty email columns per campaign
and then sort in descending order

db.receivers.aggregate( [
   { $match: { email: {$ne : ""} } },
   {
     $group: {
        _id: "$licampaigns",
        total: {$sum: 1}
     }
   },
   { 
     $sort: { total: -1 }
   }
   
] )
