// ACCEDIENDO A LA REFERENCIA DEL FORMULARIO QUE
// TRENDA LOS NUEVOS ELEMNTOS
const newForm = document.getElementById("idNewForm");

// ACCEDIENDO A LA REFENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

// ACCEDIENDO AL VALOR DEL SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento");

// ACCEDIENDO ALOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// AGREGANDO FUNCIONES
const verificarTipoElemento = function () {
	let elemento = cmbElemento.value;
	// validando que se haya seleccionado un elemento
	if (elemento != "") {
		// Metodo perteneciente al modal de bootstrap
		modal.show();
	} else {
		alert("Debe seleccionar el elemento que se creara");
	}
};

const newSelect = function () {
	// Creando elementos
	let addElemento = document.createElement("select");
	// Creando atributos para el nuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`);
	addElemento.setAttribute("class", "form-select");

	// Creando option para el select
	for (let i = 1; i <= 10; i++) {
		let addOption = document.createElement("option");
		addOption.value = i;
		addOption.innerHTML = `Opcion ${i}`;
		addElemento.appendChild(addOption);
	}

	// Creando label para el nuevo control
	let labelElemento = document.createElement("label");
	labelElemento.setAttribute("for", `id${nombreElemento.value}`);
	// Creando texto para label
	labelElemento.textContent = tituloElemento.value;

	// Creando label de id
	let labelId = document.createElement("span");
	labelId.textContent = `ID de control : ${nombreElemento.value}`;

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div");
	// Agregando atributos
	divElemento.setAttribute("class", "form-floating");

	// Creando el input que sera hijo del div
	divElemento.appendChild(addElemento);
	// Creando el label qe sera hijo del div
	divElemento.appendChild(labelElemento);

	// Creando el SPAN que sera hijo del nuevo formulario
	newForm.appendChild(labelId);

	// Creando el Div qe sera hijo del nuevo formulario
	newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
	// Creando elementos
	let addElemento = document.createElement("input");
	//creando atributos para el neuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`);
	addElemento.setAttribute("type", newElemento);
	addElemento.setAttribute("class", "form-check-input");

	//creando label para el nuevo control
	let labelElemento = document.createElement("label");
	labelElemento.setAttribute("class", "form-check-label");
	labelElemento.setAttribute("for", `id${nombreElemento.value}`);
	//creando texto para label
	labelElemento.textContent = tituloElemento.value;

	//Creando label de id
	let labelId = document.createElement("span");
	labelId.textContent = `ID de control : ${nombreElemento.value}`;

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div");
	// Agregando atributos
	divElemento.setAttribute("class", "form-check");

	//Creando el input que sera hijo del div
	divElemento.appendChild(addElemento);
	//Creando el label que sera hijo del div
	divElemento.appendChild(labelElemento);

	//Creando el SPAN que sera hijo del nuevo Formulario
	newForm.appendChild(labelId);

	//Creando el Div que sera hijo del nuevo Formulario
	newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
	// Creando elementos de tipo = text, number, date y password
	let addElemento =
		newElemento == "textarea"
		? document.createElement("textarea")
        	: document.createElement("input");
	
	// Creando atributos para el neuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`);
	addElemento.setAttribute("type", newElemento);
	addElemento.setAttribute("class", "form-control");
	addElemento.setAttribute("placeholder", tituloElemento.value);

	// Creando label para el nuevo control
	let labelElemento = document.createElement("label");
	labelElemento.setAttribute("for", `id${nombreElemento.value}`);

	// Creando icono para el label
	let iconLabel = document.createElement("i");
	iconLabel.setAttribute("class", "bi bi-tag");

	// Creando texto para label
	labelElemento.textContent = tituloElemento.value;

	// Creando el elemento i como hijo del label, afterbegin le
	// indicamos que se creara entes de su primer hijo
	labelElemento.insertAdjacentElement("afterbegin", iconLabel);

	// Creando label de id
	let labelId = document.createElement("span");
	labelId.textContent = `ID de control : ${nombreElemento.value}`;

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div");
	// Agregando atributos
	divElemento.setAttribute("class", "form-floating mb-3");

	// Creando el input que sera hijo del div
	divElemento.appendChild(addElemento);
	// Creando el label que sera hijo del div
	divElemento.appendChild(labelElemento);

	// Creando el SPAN que sera hijo del nuevo Formulario
	newForm.appendChild(labelId);

	// Creando el Div que sera hijo del nuevo formulario
	newForm.appendChild(divElemento);
};

// AGREGANDO EVENTO CLIC A LOS BOTONES
buttonCrear.onclick = () => {
	verificarTipoElemento()
};

buttonAddElemento.onclick = () => {
	if (idExiste(nombreElemento.value)) {
		alert("Error: este ID ya existe. No se permiten controles duplicados.");
    		return;
	}

	if (nombreElemento.value != "" && tituloElemento.value != "") {
        	let elemento = cmbElemento.value;

		if (elemento == "select") {
			newSelect();
        	} else if (elemento == "radio" || elemento == "checkbox") {
            		newRadioCheckbox(elemento);
        	} else {
            		newInput(elemento);
        	}
    	} else {
        	alert("Faltan campos por completar");
    	}
};

// Agregando evento para el modal de bootstrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
	// Limpiando campos para los nuevos elementos
	tituloElemento.value = "";
    	nombreElemento.value = "";
    	// inicializando puntero en el campo del titulo para el control
    	tituloElemento.focus();
});

const idExiste = (id) => {
	return document.getElementById(`id${id}`) !== null;
};

function validarNewForm() {
    	let controles = newForm.querySelectorAll("input, select, textarea");
    	for (let i = 0; i < controles.length; i++) {
        	let c = controles[i];
        	if (c.type === "radio" || c.type === "checkbox") {
            		let grupo = document.getElementsByName(c.name);
            		let marcado = false;
            		for (let j = 0; j < grupo.length; j++) {
                		if (grupo[j].checked) {
                    			marcado = true;
                		}
            		}
            		if (!marcado) {
                		alert("Debe seleccionar una opción del control: " + c.name);
                		return;
            		}
        	} else if (c.tagName === "SELECT") {
            		if (c.value === "") {
                		alert("Debe seleccionar una opción en: " + c.id);
                		return;
            		}
        	} else {
            		if (c.value.trim() === "") {
                		alert("El campo " + c.id + " está vacío");
                		return;
            		}
        	}
    	}
	alert("Formulario válido");
}

document.getElementById("idBtnValidarForm").onclick = validarNewForm;

