Template.newPosition.onRendered(function() {
	this.$(".dropdown").dropdown();
});

Template.newPosition.helpers({
	departments: function () {
		return Departments.find({}, {sort:{name: 1}});
	}
});

Template.newPosition.events({
	'submit form': function (e) {
		e.preventDefault();
	}
});