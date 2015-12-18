Clients = new Mongo.Collection('clients');

clientTypes = new Mongo.Collection('clientTypes');

documentTypes = new Mongo.Collection('documentTypes');

if (Meteor.isServer) {
	Clients._ensureIndex({
		'businessName': 'text',
		'surnames': 'text',
		'forenames': 'text'
	});
}