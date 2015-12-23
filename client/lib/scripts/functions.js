dateMoment = function(event, template) {
	event.preventDefault();
	var date = event.currentTarget.value;
	var formateddate = moment(date, ["DDMMYYYY", "DD/MM/YYYY"]);
	event.currentTarget.value = moment(formateddate).format("DD/MM/YYYY");
};