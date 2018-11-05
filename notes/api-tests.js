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
// var promise1 = ajaxCall('http://45.55.120.26/get_connections/5bc2231aca978bf632655324');        

// //Jason's connections (on Elisha's pc)
// var promise2 = ajaxCall('http://45.55.120.26/get_connections/5b3b0f2b126f883d076adb1d');

// //Elisha's tagged connections
// var promise3 = ajaxCall('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5bc2231aca978bf632655324');

// //Jason's tagged connections
// var promise4 = ajaxCall('http://45.55.120.26/get_tagged_connections_of_user/?user_id=5b3b0f2b126f883d076adb1d');


// Jason's data from the 'Downloaded Tab' 
// (taken from the background.html network tab)
var promise1 = ajaxCall('http://45.55.120.26/get_downloads?user_id=5bc2231aca978bf632655324');

//SQL Inner Join Function (see Readme.md)
const equijoin = (xs, ys, primary, foreign, sel) => {
    const ix = xs.reduce((ix, row) => // loop through m items
        ix.set(row[primary], row),    // populate index for primary table
    new Map);                         // create an index for primary table

    return ys.map(row =>              // loop through n items
        sel(ix.get(row[foreign]),     // get corresponding row from primary
        row));                        // select only the columns you need
};


Promise.all([promise1]).then(function(values) {
  let invitedByElisha=0;
  let messagedByElisha=0;

  console.log('Elishas get_downloads data: ',values[0]);

  values[0].forEach(function (file, index) {
    if(file['operation']==="Connect"){
        invitedByElisha += file['count'];
    } else if(file['operation']==="Message") {
        messagedByElisha += file['count'];
    }
    // console.log(index); // index
  });

  console.log('amount of people invited by Elisha: ',invitedByElisha);
  console.log('amount of people meesaged by Elisha: ',messagedByElisha);

}).catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
});

// module.exports = results;
