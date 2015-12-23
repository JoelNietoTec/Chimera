Router.route('/departments', {
	name: 'listDepartments',
	waitOn: function() {
		return Meteor.subscribe('departments');
	}
});