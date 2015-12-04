Template.appHeader.onRendered(function(){
	this.$('.ui.dropdown').dropdown();
});

Template.appHeader.events({
	'click #logout': function (event) {
		event.preventDefault();
		if (Meteor.userId())
			AccountsTemplates.logout();
	},
	'click #toggle': function(event) {
		$('.ui.sidebar')
			.sidebar('setting', 'transition', 'overlay')
			.sidebar('toggle')
		;
	}
});