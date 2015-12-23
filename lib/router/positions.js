Router.route('/positions', {
	name: 'listPositions',
	waitOn: function() {
		return [
			Meteor.subscribe('departments'),
			Meteor.subscribe('positions')];
	}
});