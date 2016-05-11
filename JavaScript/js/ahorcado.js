var palabras = {
	"1" : "apagado","2" : "agitado","3" : "mecanismo","4" : "sardina",
	"5" : "ventana","6" : "contraproducente","7" : "incondicional",
	"8" : "esfuerzo","9" : "calendario","10": "extraterreste",
	"11": "correcto","12": "responsable","13": "dinosaurio",
	"14": "orquidea","15": "zarigueya","16": "circunferencia",
	"17": "inconstitucionalidad","18": "contrarevolucionario",
	"19": "manzana","20": "besugo","21": "zaragoza",
	"22": "policia","23": "enemigo",
	"24": "billetera","25": "prioridad","26": "inferior","27": "cuerpo",
	"28": "pez","29": "cotidiano","30": "zombie","31": "humano",
	"32": "manada","33": "ciudad","34": "vigilante",
	"35": "universidad","36": "borrador","37": "ingenioso"
}

var contador = 7;
var total = (Object.keys(palabras).length)+1;
var sPalabra = Math.floor((Math.random() * total) + 1);
var fpalabra = palabras[sPalabra.toString()];
console.log("el total es: "+total + " y el randome es: "+sPalabra);
var Padivinar = fpalabra.split("");
console.log(Padivinar);

window.addEventListener("load",function(){
	var intentos = document.getElementById("intentos");
	var espacios = document.getElementById("dPalabra");
	intentos.innerHTML = contador;
	var c = Padivinar.length;
	rayas(c);
	var campo = document.getElementById("letraI");
	var boton = document.getElementById("enviar");
	campo.addEventListener("keyup",validar);
	boton.addEventListener("click",procesar);
	function validar()
	{
		var cadena = campo.value;
		if(cadena.length > 1)
		{
			campo.value = "";
		}
		if(!isNaN(parseInt(cadena)))
			campo.value = "";
	}
	
	function procesar()
	{
		var letra = campo.value;
		if(letra == "")
		{
			alert("debes ingresar una letra!!");
			campo.select();
		}
		else if(Padivinar.indexOf(letra)==-1)
		{
			contador = contador-1;
			if(contador == 0)
			{
				intentos.innerHTML = contador;
				alert("Has perdido, la palabra es "+fpalabra.toUpperCase());
			}
			else
				intentos.innerHTML = contador;
			campo.select();
		}
		else
		{
			letra = letra.toLowerCase();
			var x = Padivinar.length;
			var ban;
			var termina = true;
			for(var i = 0; i<x; i++)
			{
				ban = Padivinar[i];
				var labL = document.getElementById("l"+i);
				console.log(labL.textContent);
				if(ban == letra)
				{
					labL.innerHTML = " "+letra.toUpperCase()+" ";
				}
				if(labL.textContent == "__ ")
				{
					termina=false;
				}
			}
			if(termina)
			{
				alert("Felicidades");
			}
			campo.value = "";
			campo.select();
			
		}
	}
	
	function rayas(cantidad)
	{
		for(var i=0; i<cantidad; i++)
	{
		var l = document.createElement("LABEL");
		l.setAttribute("id","l"+i);
		var t = document.createTextNode("__ ");
		l.appendChild(t);
		espacios.appendChild(l);
	}
	}
});