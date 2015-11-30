if (Sexes.find().count() === 0) {
	Sexes.insert({name: 'Femenino', icon: 'female'});
	Sexes.insert({name: 'Masculino', icon: 'male'});
}

if (clientTypes.find().count() === 0) {
	clientTypes.insert({name: 'Jurídica', icon: 'building'});
	clientTypes.insert({name: 'Natural', icon: 'user'});
}

if (documentTypes.find().count() === 0) {
	documentTypes.insert({name: 'Cédula'});
	documentTypes.insert({name: 'Pasaporte'});
	documentTypes.insert({name: 'Otro'});
}