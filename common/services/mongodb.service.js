const MongoClient = require('mongodb').MongoClient;
const asser = require('assert');

//Connection URL
const url = 'mongodb+srv://admin:admin@cestest-dmfj8.gcp.mongodb.net/test?retryWrites=true&w=majority'

//DataBase Name
const dbName = 'ces_test'

//Create a new MongoClient
const client = new MongoClient(url);

//Use connect method to connect to the server
client.connect(function(err, client) {
	assert.equal(null, err);
	console.log("Connected Successfully to server");
	const db = client.db(dbName);

	client.close();
});