window.addEventListener("load",palabra);

function palabra ()
{
	var cadena = 'RicardoPinedaRubio';
	cadena = cadena.split('');
	cadena = cadena.sort();
	var tamano = cadena.length;
	var resultado = [];
	for(var i =0; i<tamano; i++)
	{
		if(resultado.length!=0)
		{
			if(cadena[i]!=cadena[i-1])
				resultado.push(cadena[i]);
		}
		else
			resultado.push(cadena[i]);
	}
	console.log(resultado.join(""));

}