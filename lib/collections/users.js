Meteor.users.allow({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});