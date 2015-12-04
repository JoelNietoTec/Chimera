Template.listClients.helpers({
	clients: function () {
		return Clients.find();
	}
});