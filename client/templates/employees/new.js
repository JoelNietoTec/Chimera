Template.newEmployee.onRendered(function(){
  this.$(".dropdown").dropdown();
});

Template.newEmployee.helpers({
	sexes: function () {
		return Sexes.find();
	},
	countries: function() {
		return Countries.find();
	}
});