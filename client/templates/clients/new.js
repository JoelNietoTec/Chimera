Template.newClient.helpers({
	clientTypes: function () {
		return clientTypes.find();
	}
});

Template.newClient.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
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
	}, 
	industries: function() {
		return Industries.find({}, {sort:{name: 1}});
	}
});

Template.newClient.events({
	'submit form': function (e) {
		e.preventDefault();
		var client = {
			clientType: $(e.target).find('[name=clientType]').val(),
			surnames: $(e.target).find('[name=surnames]').val(),
			forenames: $(e.target).find('[name=forenames]').val(),
			sex: $(e.target).find('[name=sex]').val(),
			country: $(e.target).find('[name=country]').val()
		};

		Clients.insert(client);
	}
});