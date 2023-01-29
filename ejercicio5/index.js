var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numerodni = prompt("Escribe tu numero de DNI (sin la letra)");
var letradni = prompt("Escribe la letra de tu DNI en mayusculas").toUpperCase();
if (numerodni < 0 || numerodni > 99999999) {
	alert("El numero indicado no es válido");
}
	else {
		var letraCalculada = letras[numerodni % 23];
		if (letraCalculada != letradni) {
			alert ("La letra introducida no es válida");
			}
			else {
				alert ("DNI correcto!");
			}
}