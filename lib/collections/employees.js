Employees = new Mongo.Collection('employees');

Employees.allow({
	insert: function () {
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});