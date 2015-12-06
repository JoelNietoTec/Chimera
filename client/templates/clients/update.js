Template.updateClient.onCreated(function() {
	Session.set('currentType', this.data.clientType);
});

Template.updateClient.helpers({
	currentType: function () {
		return Session.get('currentType');
	}
});

Template.legalClient.onRendered(function() {
	if (!this.data.industry) {
	}
	else {
		this.$('#industry').dropdown('set selected', this.data.industry);
  	this.$('#country').dropdown('set selected', this.data.country);
	}
});

Template.updateClient.events({
	'submit form': function (e) {
		e.preventDefault();

		var currentClientId = this._id;

		var $form = $('.ui.form');

		var clientProperties = $form.form('get values');


		if (_.property('clientType')(clientProperties) === 'Natural')
			clientProperties = _.extend(client, {
				businessName: _.property('surnames')(clientProperties).toUpperCase() + ", " + _.property('forenames')(clientProperties).toUpperCase()
			});

		//Se agregan la fecha de alta
		clientProperties = _.extend(clientProperties, {
			modifyDate: new Date()
		});

		console.log(clientProperties);

		Clients.update(currentClientId, {$set: clientProperties});
		
		Router.go('listClients');
	}
});