Template.listEmployees.helpers({
	employees: function () {
		return Employees.find();
	}
});