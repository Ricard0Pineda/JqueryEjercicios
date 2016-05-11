var contador = 0;
var numeroMagico = Math.floor((Math.random() * 100) + 1);

function revisar()
{
	var numeroUsuario = document.getElementById("numeroUsuario").value;
	numeroUsuario = parseInt(numeroUsuario);
	cMensaje = document.getElementById("mensaje");
	if(!isNaN(numeroUsuario))
	{
		contador = contador + 1;
		if(numeroUsuario==numeroMagico)
		{
			cMensaje.innerHTML = "Lo has logrado, has adivinado el número mágico en "+contador+" intentos";
			cMensaje.style.color = 'green';
			document.getElementById('ir').disabled = true;
			document.getElementById('numeroUsuario').disabled = true;
		}else if(numeroUsuario>numeroMagico)
		{
			cMensaje.innerHTML = "El número que ingresaste está por encima del número mágico";
			cMensaje.style.color = 'black';
		}
		else
		{
			
			cMensaje.innerHTML = "El número que ingresaste está por debajo del número mágico";
			cMensaje.style.color = 'black';
		}
	}
	else
	{
		cMensaje.innerHTML = "Debes escribir un número!!";
		cMensaje.style.color = 'red';
	}
}

function again()
{
	contador = 0;
	numeroMagico = Math.floor((Math.random() * 100) + 1);
	document.getElementById('ir').disabled = false;
	document.getElementById('numeroUsuario').disabled = false;
	document.getElementById('ir').disabled = false;
	document.getElementById('numeroUsuario').value = '';
	document.getElementById("mensaje").innerHTML = '';
}