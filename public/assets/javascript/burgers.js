// wait till the document is ready before attaching the button click handlers
$(function() {

	// add a click handler to add new burgers to the database
	$("#add_burger").on("click", function() {
		$.ajax({
			method: "POST",
			url: "/burgers/create",
			data: {
				burger_name: $("#burger_type").val(),
				devoured: 0
			}
		}).done(function() {
			location.reload(true);
		});
	});

	// add a click handler to update the devoured state of a burger
	$("#made_burgers .eat_burger").on("click", function() {
		//console.log("made_burgers: \n" + $(this).prop("value"));
		$.ajax({
			method: "PUT",
			url: "/burgers/update/" + $(this).prop("value"),
			data: {
				devoured: 1
			}
		}).done(function() {
			location.reload(true);
		});
	});

});
