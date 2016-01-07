Router.route('/clients/:_id/profile', {
	name: 'pageClient',
	waitOn: function() {
		return Meteor.subscribe('singleClient', this.params._id)
	},
	data: function() {
		return Clients.findOne(this.params._id);
	}
});

Router.route('/clients/new', {
	name: 'newClient', 
	waitOn: function() {
		return [
			Meteor.subscribe('clientTypes'),
			Meteor.subscribe('sexes'),
			Meteor.subscribe('documentTypes'),
			Meteor.subscribe('countries'),
			Meteor.subscribe('industries')
		];
	}
});

Router.route('/clients/:_id/update', {
	name: 'updateClient',
	waitOn: function() {
		return [
			Meteor.subscribe('singleClient', this.params._id),
			Meteor.subscribe('sexes'),
			Meteor.subscribe('documentTypes'),
			Meteor.subscribe('countries'),
			Meteor.subscribe('industries')
		];
	},
	data: function() {
		return Clients.findOne(this.params._id);
	}
});

Router.route('/clients', {
	name: 'listClients', 
	waitOn: function() {
		return Meteor.subscribe('countries');
	}
});