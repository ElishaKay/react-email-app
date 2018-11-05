// source: 

var request = require("request");

const ajaxCall = (url) => {
  return new Promise((resolve, reject) => {
    /*stuff using url and other parameters*/
        request({
			method: "GET",
			url: url,
			json: true
		}, function(err, response, body) {
				if(!err){
					resolve(response.body);
				} else {
					reject(err);		
				}
		});

    }    
)};


//Elisha's connections
var promise1 = ajaxCall('http://45.55.120.26/get_connections/5bc2231aca978bf632655324');        

//Jason's connections (on Elisha's pc)
var promise2 = ajaxCall('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');

//Elisha's tagged connections
var promise3 = ajaxCall('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5bc2231aca978bf632655324');

//Jason's tagged connections
var promise4 = ajaxCall('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5b3b0f2b126f883d076adb1d');


// Jason's data from the 'Downloaded Tab' 
// (taken from the background.html network tab)
// http://45.55.120.26/get_downloads?user_id=5b3b0f2b126f883d076adb1d


//SQL Inner Join Function (see Readme.md)
const equijoin = (xs, ys, primary, foreign, sel) => {
    const ix = xs.reduce((ix, row) => // loop through m items
        ix.set(row[primary], row),    // populate index for primary table
    new Map);                         // create an index for primary table

    return ys.map(row =>              // loop through n items
        sel(ix.get(row[foreign]),     // get corresponding row from primary
        row));                        // select only the columns you need
};


Promise.all([promise1, promise2, promise3, promise4]).then(function(values) {
  let sentByElisha=0;
  let acceptedElisha=0;
  let sentByJason=0;
  let acceptedJason=0;

  sentByElisha=values[0].conns.length;
  sentByJason=values[1].conns.length;

  console.log('amount of Elisha connection requests: ',sentByElisha);
  console.log('amount of Jasons connection requests: ',sentByJason);

	acceptedElisha = values[0].conns.filter(val => {
	  return val.is_accepted === 'true';
	}).length;

  	acceptedJason = values[1].conns.filter(val => {
	  return val.is_accepted === 'true';
	}).length;

  console.log('amount of people that accepted Elishas invites: ',acceptedElisha)

  console.log('amount of people that accepted Jasons invites: ',acceptedJason);

  console.log('Elishas Overall Conversion Rate: ',  Math.floor((acceptedElisha/sentByElisha) * 100)+'%');

  console.log('Jasons Overall Conversion Rate: ',  Math.floor((acceptedJason/sentByJason) * 100)+'%');

  const elishaTaggedConns = equijoin(values[0].conns, values[2], "c_public_id", "connection_id",
    ({c_name, is_accepted}, {tags}) => ({c_name,is_accepted, tags}));

  const jasonTaggedConns = equijoin(values[1].conns, values[3], "c_public_id", "connection_id",
    ({c_name, is_accepted}, {tags}) => ({c_name,is_accepted, tags}));

  // console.log('result of inner join: ',elishaTaggedConns);

  console.log('amount of tagged connections for Elisha: ',elishaTaggedConns.length);

  console.log('amount of tagged connections for Jason: ',jasonTaggedConns.length);

}).catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
});

// module.exports = results;
