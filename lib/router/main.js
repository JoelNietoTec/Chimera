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