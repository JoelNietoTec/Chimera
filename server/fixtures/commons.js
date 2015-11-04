if (Sexes.find().count() === 0) {
	Sexes.insert({name: 'Femenino', icon: 'female'});
	Sexes.insert({name: 'Masculino', icon: 'male'});
}