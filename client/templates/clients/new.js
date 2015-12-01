Template.newClient.helpers({
	clientTypes: function () {
		return clientTypes.find();
	},
	currentType: function() {
		if (Session.get('currentType') === 'Natural')
			return true
		else
			return false
	}
});

Template.newClient.onRendered(function() {
	this.$('#clientType').dropdown({
		onChange: function(val) {
			Session.set('currentType', val);
		}
	});
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
			country: $(e.target).find('[name=country]').val(), 
			documentType: $(e.target).find('[name=documentType]').val(),
			documentId: $(e.target).find('[name=documentId]').val()
		};
		Clients.insert(client);
	}
});