const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./models/Receiver');
const Receiver = mongoose.model('receivers');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
let receivers;

let getReceivers = async () => {
	receivers = await Receiver.find({ publicIdentifier: 'talieh' });
	console.log(receivers);
	if(receivers.length==0){
		console.log('nobody found')
	} else {
		console.log('receiver found')
	}
}

getReceivers();

