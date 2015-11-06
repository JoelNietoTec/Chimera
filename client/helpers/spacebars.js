Template.registerHelper('capitalize', function(n){
	return n.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
});