clientAddress = new Mongo.Collection(null);

insertAddress = function(address) {
	clientAddress.insert(address);
}

//Template objects
Template.clientAddresses.helpers({
	countries: function () {
		return Countries.find({}, {sort:{esp_name: 1}});
	}, 
	address: function() {
		return clientAddress.find();
	}
});

Template.clientAddresses.events({
	'click #add_address': function (e) {
		e.preventDefault();

		var $form = $('.ui.form#address');

		var address = $form.form('get values', ['country', 'city', 'street', 'address_text']);
		console.log(address);

		insertAddress(address);
	}
});

Template.clientAddresses.onRendered(function() {
	clientAddress.remove({});
});