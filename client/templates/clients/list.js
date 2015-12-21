Template.listClients.helpers({
	clients: function () {
		Meteor.subscribe('clients', Session.get("searchClient"));
		if (Session.get("searchClient")) {
			return Clients.find({score: {$gt: 0}}, {sort: [["score", "desc"]]});
		}
		else
			return Clients.find({});
	}
});

Template.listClients.events({
	'keyup form input': _.debounce(function(event, template) {
		event.preventDefault();
		Session.set('searchClient', template.find('form input').value);
	}, 300)	
});

Template.listClients.onRendered(function() {
	Session.set('searchClient', "");
});