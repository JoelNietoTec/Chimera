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
});

Template.naturalClient.onRendered(function() {
	this.$('.ui.dropdown').dropdown({
		fullTextSearch: true
	});
});

Template.legalClient.onRendered(function() {
	this.$('.ui.dropdown').dropdown({
		fullTextSearch: true
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
	'submit form': function (e) {
		e.preventDefault();
		var $form = $('.ui.form');

		var client = $form.form('get values');


		if (_.property('clientType')(client) === 'Natural')
			client = _.extend(client, {
				businessName: _.property('surnames')(client).toUpperCase() + ", " + _.property('forenames')(client).toUpperCase()
			});

		//Se agregan la fecha de alta
		client = _.extend(client, {
			createdDate: new Date()
		});

		console.log(client);
		Clients.insert(client);
		Router.go('listClients');
	}
});