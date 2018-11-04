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
	receivers = await Receiver.find({ publicIdentifier: 'gordonwhyte' });
	console.log(receivers);
}

getReceivers();

