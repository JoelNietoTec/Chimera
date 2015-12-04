Template.updateClient.onCreated(function() {
	Session.set('currentType', this.data.clientType);
});

Template.updateClient.helpers({
	currentType: function () {
		return Session.get('currentType');
	}
});