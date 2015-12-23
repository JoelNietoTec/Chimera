Router.route('/employees', {
	name: 'listEmployees',
	waitOn: function() {
		return Meteor.subscribe('employees');
	}
});

Router.route('/employees/new', {
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