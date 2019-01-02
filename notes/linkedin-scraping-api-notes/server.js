const bodyParser = require('body-parser');
const express = require('express');
let app = express();

const connections = require('./get-connections');
// const analyzeConnections = require('./analyze-connections');
// analyzeConnections(connections);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 8000));

app.post('/add_profile', function(req,res){
	console.log('called add_profile function on server');
	console.log('req.body: ',req.body);

	
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})