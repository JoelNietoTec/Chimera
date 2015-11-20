Router.configure({
	layoutTemplate: 'appLayout', 
	loadingTemplate: 'appLoading', 
	waitOn: function() {
		return Meteor.subscribe('currentProfile');
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
	data: function() {
		return Profiles.findOne({userId: this.userId});
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