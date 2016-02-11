// Mayusculas en nombres propios
Template.registerHelper('capitalize', function(n){
	var l = n.toLowerCase();
	return l.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
});

//Devuelve el correo del usuario actual
Template.registerHelper('currentUserEmail', function() {
	var user = Meteor.user();
	if (user && user.emails)
		return user.emails[0].address
});

//Devuelve el id de perfil
Template.registerHelper('myProfileId', function() {
	var user = Meteor.user();
	var profile = function() {
		return Profile.findOne({userId: user._id});
	};
	if (user && profile)
		return profile._id
});

//Compara dos elementos
Template.registerHelper('isEqual', function(element1, element2) {
	return element2 === element1;
});


//Formatea fechas
Template.registerHelper('formatDate', function(date) {
	if (!date)
		return ""
	else
		return moment(date).format('DD/MM/YYYY');
});


//Paises con su bandera para dropdowns
Template.registerHelper('countryData', function(countryName) {
	var country = Countries.findOne({name: countryName});
	
	var capitalize = function(country) {
		return country.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};
	var countryCap = capitalize(country.esp_name);
	
	return '<i class="' + country.abbreviation + ' flag"></i> ' + countryCap; 
});


//Modal de confirmacion
Template.registerHelper('confirmation', function(id, message, description, icon) {
	var modal = '<div class="ui basic small modal" id="' + id + '">';
	modal = modal + '<div class="ui icon header"> <i class="'+ icon + ' icon"></i>' + message + '</div>';
	modal = modal + '<div class="content"><p>' + description + '</p></div>'
  modal = modal + '<div class="actions"> \
      <div class="ui red cancel inverted button"> \
        <i class="remove icon"></i> \
        No \
      </div> \
      <div class="ui green ok inverted button"> \
        <i class="checkmark icon"></i> \
        Sí \
      </div> \
  </div> \
</div>';
return modal;
});