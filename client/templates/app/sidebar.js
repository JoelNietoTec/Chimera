Template.appSidebar.events({
	'.ui.sidebar click': function (e) {
		e.preventDefault();
		$('.ui.sidebar').sidebar('toggle');
	}
});