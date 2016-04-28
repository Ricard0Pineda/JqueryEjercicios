$(document).on("ready", function () {
	$('#r1').mousedown(function () {
		$('#r1').css('background-color', 'red');
	});
	$(document).mouseup(function () {
		$('#r1').css('background-color', 'white');
	});
	$('#r2').mousedown(function () {
		$('#r2').css('background-color', 'orange');
	});
	$(document).mouseup(function () {
		$('#r2').css('background-color', 'white');
	});
	$('#r3').mousedown(function () {
		$('#r3').css('background-color', 'green');
	});
	$(document).mouseup(function () {
		$('#r3').css('background-color', 'white');
	});
});