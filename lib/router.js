Router.configure({
	layoutTemplate: 'appLayout'
});


Router.route('/', {name: 'appHome'});

Router.route('/employees', {name: 'newEmployee'});

Router.route('/departments', {name: 'listDepartments'});