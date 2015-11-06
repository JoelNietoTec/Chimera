Departments = new Mongo.Collection('departments');

validateDepartment = function(department) {
	var errors = {};

	if (!department.name)
		errors.name = "Insertar nombre";

	if(!department.abbreviation)
		errors.abbreviation = "Insertar abreviatura";

	return errors;
}