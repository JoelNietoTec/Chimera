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
	'click .button.approve': function(e) {
		e.preventDefault();
		$('.ui.modal#save')
			.modal({
				onApprove: function() {
					$('.ui.form').submit();
				}
			})
			.modal('show')
	},
	'click .button.remove': function(e) {
		e.preventDefault();
		var currentClientId = this._id;
		$('.ui.modal#remove')
			.modal({
				onApprove: function() {
					Clients.remove({_id: currentClientId});
					Router.go('listClients');
				}
			})
			.modal('show')
	},
	'click .button.cancel': function(e) {
		e.preventDefault();
		$('.ui.modal#cancel')
			.modal({
				onApprove: function() {
					Router.go('listClients');
				}
			})
			.modal('show')
	},
	'submit form': function (e) {
		e.preventDefault();

		var currentClientId = this._id;

		var $form = $('.ui.form');

		var clientProperties = $form.form('get values');


		if (Session.get('currentType') === 'Natural')
			clientProperties = _.extend(clientProperties, {
				businessName: _.property('surnames')(clientProperties).toUpperCase() + ", " + _.property('forenames')(clientProperties).toUpperCase()
			});

		//Se agregan la fecha de modificacion
		clientProperties = _.extend(clientProperties, {
			modifyDate: new Date()
		});

		Clients.update(currentClientId, {$set: clientProperties});
		
		Router.go('listClients');
	}
});