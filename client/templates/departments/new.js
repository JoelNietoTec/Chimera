Template.newDepartment.events({
	'submit form': function (e) {
		e.preventDefault();
		var department = {
			name: $(e.target).find('[name=name]').val(),
			abbreviation: $(e.target).find('[name=abbreviation]').val()
		}

		var errors = validateDepartment(department);

		if (errors.name || errors.abbreviation)
			return Session.set('newDepartmentErrors', errors);

		Departments.insert(department);

		$('.form')[0].reset();

		Router.go('listDepartments', {});
	}
});

Template.newDepartment.onCreated(function() {
	Session.set('newDepartmentErrors', {});
});

Template.newDepartment.onRendered(function() {
	$('.ui.form').form({
		fields: {
			name: 'empty',
			abbreviation: ['maxLength[6]', 'empty']
		}
	});
});

