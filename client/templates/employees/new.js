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
  $('.ui.form').form({
  	fields: {
  		forenames: 'empty',
  		surnames: 'empty',
  		sex: 'empty',
  		country: 'empty',
  		office_phone: 'empty',
  		mobile_phone: 'empty',
  		email: 'empty',
  		position: 'empty',
  		department: 'empty',
  		startDate: 'empty'
  	}
  });
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
	'submit form': function(e) {
		e.preventDefault();
		var $form = $('.ui.form');

		var employee = $form.form('get values');

		var startDate = moment(_.property('startDate')(employee), "DD/MM/YYYY");

		employee = _.extend(employee, {
			startDate: moment(startDate).toDate()
		});

		Employees.insert(employee);

		console.log(employee);

		Router.go('listEmployees', {});

	},
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