Template.appLayout.events({
	'blur .date': function (event, template) {
		dateMoment(event, template);
	},
	/*Selecciona todo el texto a posarse sobre el elemento*/
	'click .date': function(event) {
		event.currentTarget.select();
	}
});

Template.appLayout.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
})