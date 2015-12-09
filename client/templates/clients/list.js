Template.listClients.helpers({
	clients: function () {
		var search = Session.get('search');
		return Clients.find({"businessName": /search/});
	}
});

Template.listClients.events({
	'input #search': function (event, template) {
		Session.set('search', event.currentTarget.value);
		var search = Session.get('search');
		console.log(search);
	}
});