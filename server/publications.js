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

Meteor.publish('clients', function(searchText) {
	if (searchText) {
		return Clients.find(
			{$text: {
				$search: searchText
				}
			},
			{
				fields: {
					score: { $meta: 'textScore' }
				},
				sort: {
					score: {
						$meta: 'textScore'
					}
				}
			}
		);
	}
	else
		return Clients.find({});
});


Meteor.publish('singleClient', function(id){
	check(id, String);
	return Clients.find(id);
});

Meteor.publish('employees', function() {
	return Employees.find();
});