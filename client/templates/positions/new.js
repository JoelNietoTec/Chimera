Template.newPosition.onRendered(function() {
	this.$(".dropdown").dropdown();
	$('.ui.form').form({
		fields: {
			department: 'empty',
			code: 'empty',
			name: 'empty'
		}
	})
});

Template.newPosition.helpers({
	departments: function () {
		return Departments.find({}, {sort:{name: 1}});
	}
});

Template.newPosition.events({
	'submit form': function (e) {
		e.preventDefault();
		var position = {
			department: $(e.target).find('[name=department]').val(),
			code: $(e.target).find('[name=code]').val().toUpperCase(),
			name: $(e.target).find('[name=name]').val()
		};

		Positions.insert(position);
		$('.form')[0].reset();

		Router.go('listPositions');
	}
});
