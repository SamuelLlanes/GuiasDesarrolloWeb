// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// Recorrer el formulario
const recorrerFormulario = function () { 
	let totText = 0;
	let totRadio = 0;
	let totCheck = 0;
	let totDate = 0;
	let totSelect = 0;
	let totFile = 0;
	let totPass = 0;
	let totEmail = 0;

	// Recorriendo elementos del formulario
	let elementos = formulario.elements;
	let totalElementos = elementos.length;

	for (let index = 0; index < totalElementos; index++) {
		// Accediendo a cada hijo del formulario
		let elemento = elementos[index];

		// verificando el tipo de control en el formulario
		let tipoElemento = elemento.type;

		// verificando el tipo de nodo
		let tipoNode = elemento.nodeName;

		// Contabilizando el total de INPUT TYPE = TEXT
		if (tipoElemento == "text" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totText++;
		}

		// Contabilizando el total de INPUT TYPE = PASSWORD
		else if (tipoElemento == "password" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totPass++;
		}

		// Contabilizando el total de INPUT TYPE = EMAIL
		else if (tipoElemento == "email" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totEmail++;
		}

		// Contabilizando el total de INPUT TYPE = RADIO
		else if (tipoElemento == "radio" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totRadio++;
		}

		// Contabilizando el total de INPUT TYPE = CHECKBOX
		else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totCheck++;
		}

		// Contabilizando el total de INPUT TYPE = FILE
		else if (tipoElemento == "file" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totFile++;
		}

		// Contabilizando el total de INPUT TYPE = CHECKBOX
		else if (tipoElemento == "date" && tipoNode == "INPUT") {
    			console.log(elemento);
    			totDate++;
		}

		// Contabilizando el total de INPUT TYPE = EMAIL
		else if (tipoNode == "SELECT") {
    			console.log(elemento);
    			totSelect++;
		}
	}
	let resultado = `
        	Total de input[type="text"] = ${totText}<br>
        	Total de input[type="password"] = ${totPass}<br>
        	Total de input[type="radio"] = ${totRadio}<br>
        	Total de input[type="checkbox"] = ${totCheck}<br>
        	Total de input[type="date"] = ${totDate}<br>
        	Total de input[type="email"] = ${totEmail}<br>
        	Total de select = ${totSelect}<br>
	`;

	bodyModal.innerHTML = resultado;
	// Funcion que permite mostrar el modal de Bootstrap
	// Esta funcion es definida por Bootstrap
	modal.show();
};

function validarFormulario() {
    	let nombre = document.getElementById("idNombre");
    	let apellido = document.getElementById("idApellidos");
    	let fecha = document.getElementById("idFechaNac");
    	let correo = document.getElementById("idCorreo");
    	let pass1 = document.getElementById("idPassword");
    	let pass2 = document.getElementById("idPasswordRepetir");
    	let pais = document.getElementById("idCmPais");

	if (nombre.value.trim() === "" || apellido.value.trim() === "" || fecha.value === "" || correo.value.trim() === "" || pass1.value.trim() === "" || pass2.value.trim() === "") {
        	alert("Todos los campos son obligatorios.");
        	return;
    	}

    	let hoy = new Date();
    	let fechaIngresada = new Date(fecha.value);

    	if (fechaIngresada > hoy) {
        	alert("La fecha de nacimiento no puede ser mayor a la fecha actual.");
        	return;
    	}

    	let expCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    	if (!expCorreo.test(correo.value)) {
        	alert("El correo ingresado no es válido.");
        	return;
    	}

    	if (pass1.value !== pass2.value) {
        	alert("Las contraseñas no coinciden.");
        	return;
    	}

    	let intereses = [
        	document.getElementById("idCkProgramacion"),
        	document.getElementById("idCkBD"),
        	document.getElementById("idCkRedes"),
        	document.getElementById("idCkSeguridad")
    	];

    	let algunoMarcado = false;
    	for (let i = 0; i < intereses.length; i++) {
        	if (intereses[i].checked) {
            		algunoMarcado = true;
        	}
    	}

    	if (!algunoMarcado) {
        	alert("Debe seleccionar al menos un interés.");
        	return;
    	}

    	let carreras = document.getElementsByName("idRdCarrera");
    	let carreraOk = false;

    	for (let i = 0; i < carreras.length; i++) {
        	if (carreras[i].checked) {
            		carreraOk = true;
        	}
    	}

    	if (!carreraOk) {
        	alert("Debe seleccionar una carrera.");
        	return;
    	}

    	if (pais.value === "Seleccione una opcion") {
        	alert("Debe seleccionar un país de origen.");
        	return;
    	}

    	mostrarDatos();
    	modal.show();
}

function mostrarDatos() {
    	while (bodyModal.firstChild) {
        	bodyModal.removeChild(bodyModal.firstChild);
    	}

    	let tabla = document.createElement("table");
    	tabla.setAttribute("class", "table table-bordered");
    	function addFila(nombre, valor) {
        	let fila = document.createElement("tr");
        	let col1 = document.createElement("td");
        	let txt1 = document.createTextNode(nombre);
        	col1.appendChild(txt1);
        	let col2 = document.createElement("td");
        	let txt2 = document.createTextNode(valor);
        	col2.appendChild(txt2);
        	fila.appendChild(col1);
        	fila.appendChild(col2);
        	tabla.appendChild(fila);
    	}

    	addFila("Nombres:", document.getElementById("idNombre").value);
    	addFila("Apellidos:", document.getElementById("idApellidos").value);
    	addFila("Fecha de nacimiento:", document.getElementById("idFechaNac").value);
    	addFila("Correo:", document.getElementById("idCorreo").value);
    	let intereses = [];
    	if (idCkProgramacion.checked) intereses.push("Programación");
    	if (idCkBD.checked) intereses.push("Base de datos");
    	if (idCkRedes.checked) intereses.push("Inteligencia artificial");
    	if (idCkSeguridad.checked) intereses.push("Seguridad informática");

    	addFila("Intereses:", intereses.join(", "));

    	let carrera = "";
    	let listaCarreras = document.getElementsByName("idRdCarrera");
    	for (let i = 0; i < listaCarreras.length; i++) {
        	if (listaCarreras[i].checked) {
            		carrera = listaCarreras[i].nextElementSibling.textContent;
        	}
    	}
    	addFila("Carrera:", carrera);
    	let pais = document.getElementById("idCmPais");
    	addFila("País:", pais.options[pais.selectedIndex].text);
    	bodyModal.appendChild(tabla);
}


// agregando eventos al boton
button.onclick = () => {
    	recorrerFormulario();
};

button.onclick = () => {
	validarFormulario();
};

