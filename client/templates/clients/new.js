Template.newClient.helpers({
	clientTypes: function () {
		return clientTypes.find();
	},
	currentType: function() {
		return Session.get('currentType');
	}
});

Template.newClient.onRendered(function() {
	this.$('#clientType').dropdown({
		onChange: function(val) {
			Session.set('currentType', val);
		}
	});
	Session.set('currentType', "");
	clientAddress.remove();
});

Template.naturalClient.onRendered(function() {
	this.$('.ui.dropdown').dropdown({
		fullTextSearch: true
	});
	$('.ui.pointing.menu .item').tab();
});

Template.legalClient.onRendered(function() {
	this.$('.ui.dropdown').dropdown({
		fullTextSearch: true
	});
});

Template.naturalClient.helpers({
	sexes: function () {
		return Sexes.find();
	},
	documentTypes: function() {
		return documentTypes.find();
	},
	countries: function() {
		return Countries.find({}, {sort:{esp_name: 1}});
	}
});

Template.legalClient.helpers({
	industries: function () {
		return Industries.find({}, {sort:{name: 1}});
	},
	countries: function() {
		return Countries.find({}, {sort:{esp_name: 1}});
	}
});

Template.newClient.events({
	'click .button.approve': function() {
		$('.ui.modal#save')
			.modal({
				onApprove: function() {
					$('.ui.form#general').submit();
				}
			})
			.modal('show')
	},
	'click .button.cancel': function() {
		$('.ui.modal#cancel')
			.modal({
				onApprove: function() {
					Router.go('listClients');
				}
			})
			.modal('show')
	},
	'submit .ui.form#general': function (e) {
		e.preventDefault();
		var $form = $('.ui.form#general');

		var client = $form.form('get values');

		client = _.extend(client, {
			clientType: Session.get('currentType')
		});

		var clientAddresses = [];

		clientAddress.find().forEach(function (element) {
			clientAddresses.push({
				country: element.address_country,
				city: element.city,
				street: element.street,
				address_text: element.address_text
			})
		});


		if (_.property('clientType')(client) === 'Natural')
			client = _.extend(client, {
				businessName: _.property('surnames')(client).toUpperCase() + ", " + _.property('forenames')(client).toUpperCase()
			});

		//Se agregan la fecha de alta
		client = _.extend(client, {
			createdDate: new Date()
		});

		console.log(clientAddresses);

		client = _.extend(client, {
			addresses: clientAddresses
		})

		Clients.insert(client);
		Router.go('listClients');
	}
});