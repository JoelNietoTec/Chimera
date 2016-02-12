Router.route('/lawyers', {name: 'listLawyers'});

Router.route('/lawyers/new', {
	name: 'newLawyer',
	waitOn: function() {
		return Meteor.subscribe('lawyerTypes')
	}
});