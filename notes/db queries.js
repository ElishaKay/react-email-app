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

----------------------

Count Records where email exists:

db.receivers.count({ email: {$ne : ""} })

output: 1316

--------------------------

Count Records where email don't exist:

db.receivers.count({ email: "" })

output: 2603

-----------------------

count all records: 

db.receivers.count()

3919

------------------------

list the distinct publicIdentifier records in one huge-ass array: 

db.receivers.distinct('publicIdentifier')

---------------------------------

count the distinct amount of publicIdentifier records: 

db.receivers.distinct('publicIdentifier').length




Goal:

Count amount of emails fetched per campaign - and what percentage have emails per campaign
idea for implementaion: use the '$divide' and $project
Source: https://stackoverflow.com/questions/22819303/mongodb-aggregation-divide-computed-fields


Also When need to review $cond

https://docs.mongodb.com/manual/reference/operator/aggregation/cond/


--------------

Some Progress: Succesfully using $project and $cond - need to see how to pipe this into a $group aggregator



db.receivers.aggregate( [
   {
     $project: {
        _id: "$licampaigns",
        total: {$sum: 1},
        emailFound: {
                 $cond: { if: { $ne: [ "$email", "" ] }, then: 1, else: 0 }
               }
     }
   },
   { 
     $sort: { total: -1 }
   }
   
] )


---------------------------------

Select email, campaign, whether or not (0,1) an email is there.


db.receivers.aggregate( [
   {
     $project: {
        _id: "$licampaigns",
        total: {$sum: 1},
        email: 1,
        emailFound: {
                 $cond: { if: { $ne: [ "$email", "" ] }, then: 1, else: 0 }
               }
     }
   },
   { 
     $sort: { email: -1 }
   }
   
] )

Example Output:

/* 1 */
{
    "email" : "zvika@tvtrio.com",
    "_id" : [ 
        "CE-VP-Marketing-US-UK"
    ],
    "total" : 1.0,
    "emailFound" : 1.0
}

/* 2 */
{
    "email" : "zvickrant@yahoo.com",
    "_id" : [ 
        "CE-Ventures-US-UK"
    ],
    "total" : 1.0,
    "emailFound" : 1.0
}

/* 3 */
...

Best Query Yet

Select email, id (Sort by records that contain emails)

db.receivers.aggregate( [
   {
     $project: {
        _id: "$licampaigns",
        email: 1,
     }
   },
   { 
     $sort: { email: -1 }
   }
   
] )


 Output:

 /* 1 */
{
    "email" : "zvika@tvtrio.com",
    "_id" : [ 
        "CE-VP-Marketing-US-UK"
    ]
}

/* 2 */
{
    "email" : "zvickrant@yahoo.com",
    "_id" : [ 
        "CE-Ventures-US-UK"
    ]
}

/* 3 */


-------------------------------

Best Query Yet - Count the amout of emails per campaign:
b) Divide the total amoumnt of emails found/by total amount of records per campaign.


db.receivers.aggregate( [
   {
     $project: {
        _id: "$licampaigns",
        email: 1,
        emailFound: {
                 $cond: { if: { $ne: [ "$email", "" ] }, then: 1, else: 0 }
               }
     }
   },
   {
     $group: {
        _id: "$_id",
        total: {$sum: "$emailFound"}
     }
   },
   { 
     $sort: { total: -1 }
   }
   
] )


Example Output:

/* 1 */
{
    "_id" : [],
    "total" : 626.0
}

/* 2 */
{
    "_id" : [ 
        "CE-Ventures-US-UK"
    ],
    "total" : 222.0
}

/* 3 */
{
    "_id" : null,
    "total" : 135.0
}

/* 4 */
{
    "_id" : [ 
        "Beauty/Editor - US&UK"
    ],
    "total" : 96.0
}


---------------------------------------

records with emails over total records per campaign

db.receivers.aggregate( [
   {
     $project: {
        _id: "$licampaigns",
        email: 1,
        emailFound: {
                 $cond: { if: { $ne: [ "$email", "" ] }, then: 1, else: 0 }
               }
     }
   },
   {
     $group: {
        _id: "$_id",
        recordsWithEmails: {$sum: "$emailFound"},
        totalRecords: {$sum: 1}
     }
   },
   { 
     $sort: { recordsWithEmails: -1 }
   }
   
] )

---------------------------------

Show all columns - records with emails at the top

db.receivers.aggregate( [
   { 
     $sort: { email: -1 }
   }
   
] )

---------------------------------------
Show all columns - order by campaigns and emails simultaneously - 
in other words: per campaign, show all records with the records with emails at the top.

db.receivers.aggregate( [
   
   { 
     $sort: { licampaigns: -1, email: -1,  }
   }
   
] )
