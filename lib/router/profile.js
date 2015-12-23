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