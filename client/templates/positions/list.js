Template.listPositions.helpers({
	positions: function () {
		return Positions.find({}, {sort:{department: 1}});
	}
});