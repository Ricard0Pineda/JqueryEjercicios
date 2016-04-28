$(document).on('ready', function (){
	$('#rec').mousemove(function () {
		debugger;
		var x = event.pageX;
		var y = event.pageY;
		console.log('el puntero está dentro del div en las coordenadas x:'+x+' y:'+y);
	});
	$('#rec').mouseout(function () {
		console.log('el puntero no se encuentra dentro del div');
	});
});
