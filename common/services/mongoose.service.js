const mongoose = require('mongoose');

let count = 0;

const options = {
	useNewUrlParser: true, //To use the new parser,
	useUnifiedTopology: true, //To use the new Server Discover and Monitoring engine
 	autoIndex: false, //Don't build indexes
	reconnectTries: 30, //Retry up to 30 times
	reconnectInterval: 500, //Reconnect every 500ms
	poolSize: 10, //Maintain up to 10 sockets connections
	//If not connected, return errors inmediatly rather than waiting for reconnect
	bufferMaxEntries: 0
};

const connectWithRetry = () => {
	console.log("MongoDB connection with retry");
	mongoose.connect('mongodb+srv://admin:admin@cestest-dmfj8.gcp.mongodb.net/ces?retryWrites=true&w=majority', options).then(() => {
		console.log("MongoDB is connected");
	}).catch(err => {
		console.log("MongoDB connection unsuccessful, retry after 5 seconds.", ++count);
		setTimeout(connectWithRetry, 500);
	});
};

connectWithRetry();

exports.mongoose = mongoose;