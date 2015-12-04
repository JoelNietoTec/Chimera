Router.configure({
	layoutTemplate: 'appLayout', 
	loadingTemplate: 'appLoading', 
	waitOn: function() {
		return [
			Meteor.subscribe('currentProfile'),
			Meteor.subscribe('clients')
			];
	}
});


Router.route('/', {name: 'appHome'});

Router.route('/profile', {
	name: 'newProfile',
	waitOn: function() {
		return [
			Meteor.subscribe('sexes'),
			Meteor.subscribe('departments'),
			Meteor.subscribe('positions')
		];
	}
});


Router.route('/my_profile', {
	name: 'editProfile',
	waitOn: function() {
		return [
			Meteor.subscribe('sexes'),
			Meteor.subscribe('departments'),
			Meteor.subscribe('positions')
		];
	},
	data: function() {
		return Profiles.findOne();
	}
});

Router.route('/employees', {
	name: 'newEmployee',
	waitOn: function() {
		return [
			Meteor.subscribe('sexes'),
			Meteor.subscribe('countries'),
			Meteor.subscribe('departments'),
			Meteor.subscribe('positions')
		];
	}
});

Router.route('/departments', {
	name: 'listDepartments',
	waitOn: function() {
		return Meteor.subscribe('departments');
	}
});


Router.route('/positions', {
	name: 'listPositions',
	waitOn: function() {
		return [
			Meteor.subscribe('departments'),
			Meteor.subscribe('positions')];
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


Router.route('/clients', {
	name: 'listClients', 
	waitOn: function() {
		return [
		Meteor.subscribe('clients'),
		Meteor.subscribe('countries')
		];
	}
});