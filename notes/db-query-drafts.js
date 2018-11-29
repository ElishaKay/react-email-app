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
        total: {$sum: "$emailFound"},
        percent: { $divide: [ {$sum: "$emailFound"}, {$sum: 1} ] }
     }
   },
   { 
     $sort: { total: -1 }
   }
   
] )