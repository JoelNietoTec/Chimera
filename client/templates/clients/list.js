Template.listClients.helpers({
	clients: function () {
		Meteor.subscribe('clients', Session.get("searchClient"));

		return Clients.find();
	}
});

Template.listClients.events({
	'input #search': function (event, template) {
		Session.set('searchClient', event.currentTarget.value);
	}
});