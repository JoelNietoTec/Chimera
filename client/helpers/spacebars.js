Template.registerHelper('capitalize', function(n){
	return n.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
});

Template.registerHelper('currentUserEmail', function() {
	var user = Meteor.user();
	if (user && user.emails)
		return user.emails[0].address
});