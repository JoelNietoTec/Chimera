
Template.editProfile.helpers({
	sexes: function () {
		return Sexes.find();
	},
	departments: function() {
		return Departments.find({}, {sort: {name: 1}});
	},
	positions: function() {
		return Positions.find({department: Session.get('department')}, {sort: {name: 1}});
	}
});


Template.editProfile.onRendered(function(){
	Session.set('department', this.data.department);
  this.$("#department").dropdown({
  	onChange: function(val) {
  		$('#position').dropdown('restore defaults');
  		Session.set('department', val);
  	}
  });
  this.$('#department').dropdown('set selected', this.data.department);
  this.$('#position').dropdown();
  this.$('#position').dropdown('set selected', this.data.position);
  this.$('#sex').dropdown();
});

Template.editProfile.events({
	'submit form': function (e) {
		e.preventDefault();
	}
});