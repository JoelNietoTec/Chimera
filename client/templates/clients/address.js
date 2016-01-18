clientAddress = new Mongo.Collection(null);

insertAddress = function(address) {
	clientAddress.insert(address);
}