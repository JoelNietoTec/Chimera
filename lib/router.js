Router.configure({
	layoutTemplate: 'appLayout', 
	loadingTemplate: 'appLoading'
});


Router.route('/', {name: 'appHome'});

Router.route('/profile', {name: 'newProfile'});

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