Template.listDepartments.helpers({
	departments: function () {
		return Departments.find({}, {sort:{name: 1}});
	}
});