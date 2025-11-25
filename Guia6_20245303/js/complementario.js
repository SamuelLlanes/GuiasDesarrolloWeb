document.getElementById("idBtnValidar").onclick = () => {
	const carnet = document.getElementById("idCarnet").value;
	const nombre = document.getElementById("idNombre").value;
	const dui = document.getElementById("idDui").value;
	const nit = document.getElementById("idNit").value;
	const fecha = document.getElementById("idFecha").value;
	const correo = document.getElementById("idCorreo").value;
	const edad = document.getElementById("idEdad").value;

	if (!/^[A-Za-z]{2}[0-9]{3}$/.test(carnet)) {
		alert("Carnet invalido");
	} else {
		alert("Carnet valido");
	}

	if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
		alert("Nombre invalido");
	} else {
		alert("Nombre valido");
	}

	if (!/^[0-9]{8}-[0-9]$/.test(dui)) {
		alert("Dui invalido");
	} else {
		alert("Dui valido");
	}

	if (!/^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]$/.test(nit)) {
		alert("Nit invalido");
	} else {
		alert("Nit valido");
	}

	if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fecha)) {
		alert("Fecha invalida");
	} else {
		alert("Fecha valida");
	}

	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(correo)) {
		alert("Correo invalido");
	} else {
		alert("Correo valido");
	}

	if (!/^[0-9]+$/.test(edad)) {
		alert("Edad invalido");
	} else {
		alert("Edad valido");
	}
};
