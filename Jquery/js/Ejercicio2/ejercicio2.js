$(document).on( "ready", function(){
	$('#r1').mousedown(function(){
		$('#r1').css('background-color', 'red');
	});
	$('#r1').mouseup(function(){
		$('#r1').css('background-color', 'white');
	});
	$('#r2').mousedown(function(){
		$('#r2').css('background-color', 'orange');
	});
	$('#r2').mouseup(function(){
		$('#r2').css('background-color', 'white');
	});
	$('#r3').mousedown(function(){
		$('#r3').css('background-color', 'green');
	});
	$('#r3').mouseup(function(){
		$('#r3').css('background-color', 'white');
	});
});