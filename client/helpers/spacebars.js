Template.registerHelper('capitalize', function(n){
	return n.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
});

Template.registerHelper('currentUserEmail', function() {
	var user = Meteor.user();
	if (user && user.emails)
		return user.emails[0].address
});

Template.registerHelper('myProfileId', function() {
	var user = Meteor.user();
	var profile = function() {
		return Profile.findOne({userId: user._id});
	};
	if (user && profile)
		return profile._id
});

Template.registerHelper('isEqual', function(element1, element2) {
	return element2 === element1;
});

Template.registerHelper('formatDate', function(date) {
	return moment(date).format('DD/MM/YYYY');
});

Template.registerHelper('countryData', function(countryName) {
	var country = Countries.findOne({name: countryName});
	
	var capitalize = function(country) {
		return country.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};
	var countryCap = capitalize(country.esp_name);
	
	return '<i class="' + country.abbreviation + ' flag"></i> ' + countryCap; 
});