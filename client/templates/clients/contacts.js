Contacts = new Mongo.Collection(null);

insertContact = function(contact) {
	Contacts.insert(contact);
}

removeContact = function(id) {
	Contacts.remove(contact)
}