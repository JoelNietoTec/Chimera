Meteor.publish('departments', function() {
	return Departments.find();
});

Meteor.publish('sexes', function() {
	return Sexes.find();
});

Meteor.publish('countries', function() {
	return Countries.find();
});

Meteor.publish('positions', function() {
	return Positions.find();
});

Meteor.publish('currentProfile', function() {
	return Profiles.find({userId: this.userId});
});

Meteor.publish('clientTypes', function() {
	return clientTypes.find();
});

Meteor.publish('documentTypes', function() {
	return documentTypes.find();
});

Meteor.publish('industries', function() {
	return Industries.find();
});

Meteor.publish('clients', function() {
	return Clients.find();
});