Template.appHome.events({
	'click #logout': function (event) {
		event.preventDefault();
		if (Meteor.userId())
			AccountsTemplates.logout();
	}
});