function aviso () {
	alert("Bienvenidos al mundo JavaScript");
}

function confirmacion() {
	//Los valores que puede almacenar la variable confirmacion
	//son true o false
	let confirmacion = confirm("Desea salir de la sesion?");
	/* para imprimir una variable en una cadena podemos 
	 utilizar las comillas simples inversas `` y luego hacemos el llamado
	 de la variable con ${aqui debera escribir el nombre de la variable} */
	alert(`Valor seleccionado ${confirmacion} `);
}

function capturarDatos() {
	let nombre = prompt("Cual es su nombre?");
	// notese que en este campo del promp se mostrara 0 por defecto
	let edad = prompt("Cual es su edad?", 0);

	alert(`Su nombre es ${nombre} y su edad es ${edad}`);
}

function dibujarParrafo() {
	let parrafo = prompt("Escriba la informarcion que desea visualizar en el parrafo");

	/* Utilizaremmos la API DOM para acceder al elemento 
	<p id="idParrafo"></p> que hemos creado en nuestro documento HTML  */

	const p = document.querySelector("#idParrafo");
	p.innerHTML = parrafo;
}
