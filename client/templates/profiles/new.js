Template.newProfile.events({
	'submit form': function (e) {
		e.preventDefault();
		var user = Meteor.user();
		var profile = {
			surnames: $(e.target).find('[name=surnames]').val(),
			forenames: $(e.target).find('[name=forenames]').val(),
			mobile_tel: $(e.target).find('[name=mobile_tel]').val(),
			office_tel: $(e.target).find('[name=office_tel]').val(),
			home_tel: $(e.target).find('[name=home_tel]').val(),
			sex: $(e.target).find('[name=sex]').val(),
			position: $(e.target).find('[name=position]').val(),
			department: $(e.target).find('[name=department]').val(), 
			userId: user._id
		};
		Profiles.insert(profile);
		Router.go('appHome');
	}
});

Template.newProfile.helpers({
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


Template.newProfile.onRendered(function(){
  this.$("#department").dropdown({
  	onChange: function(val) {
  		$('#position').dropdown('restore defaults');
  		Session.set('department', val);
  		
  	}
  });
  this.$('#position').dropdown();
  this.$('#sex').dropdown();
});