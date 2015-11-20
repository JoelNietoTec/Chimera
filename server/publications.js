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