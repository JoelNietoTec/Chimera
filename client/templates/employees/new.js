Template.newEmployee.onRendered(function(){
  this.$("#department").dropdown({
  	onChange: function(val) {
  		$('#position').dropdown('restore defaults');
  		Session.set('department', val);
  		
  	}
  });
  this.$('#position').dropdown();
  this.$('#sex').dropdown();
  this.$('#country').dropdown();

});

Template.newEmployee.helpers({
	sexes: function () {
		return Sexes.find();
	},
	countries: function() {
		return Countries.find({}, {sort: {esp_name: 1}});
	},
	picture: function() {
		return Session.get("picture")
	},
	departments: function() {
		return Departments.find({}, {sort: {name: 1}});
	},
	positions: function() {
		return Positions.find({department: Session.get('department')}, {sort:{name:1}}).fetch();
	}
});

Template.newEmployee.created = function () {
	Session.setDefault("picture", '');
};


Template.newEmployee.events({
	'change .myFileInput': function (event, template) {
		FS.Utility.eachFile(event, function (file){
			Images.insert(file, function (err, fileObj) {
				if (err) {

				} else {
					var imagesURL = {
						"profiles.image" : "/cfs/files/images/" + fileObj._id
					};
					Session.set("picture", imagesURL);
				}
			});
		})
	}
});