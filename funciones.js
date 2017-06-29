function navegar(liga) {
	window.location.assign(liga + '.html');
}



function guardarDatos() {
	if (localStorage.getItem('contador')) {
		contador = localStorage.getItem('contador')
	}else{
		contador = 0;
		localStorage.setItem('contador', contador)
	}
	n = document.getElementById('n').value;
	tel = document.getElementById('tel').value;
	mail = document.getElementById('mail').value;
	dir = document.getElementById('dir').value;
	color = document.getElementById('color').value;

	localStorage.setItem('nombre' + contador, n);
	localStorage.setItem('telefono' + contador, tel);
	localStorage.setItem('correo' + contador, mail);
	localStorage.setItem('direccion' + contador, dir);
	localStorage.setItem('colorContacto' + contador, color);

	contador++;

	localStorage.setItem('contador',contador)

	window.location.assign('index.html')
}

function verContacto(id){
	localStorage.setItem('contactoVisto',id);
	window.location.assign('contacto.html')
	// document.getElementById('n').classList.add("noEditable");
	// document.getElementById('tel').classList.add("noEditable");
	// document.getElementById('mail').classList.add("noEditable");
	// document.getElementById('dir').classList.add("noEditable");
	// document.getElementById('color').classList.add("noEditable");
}

function cargarInfo(){

	id = localStorage.getItem('contactoVisto')

	n = localStorage.getItem('nombre' + id);
	tel = localStorage.getItem('telefono' + id);
	mail = localStorage.getItem('correo' + id);
	dir = localStorage.getItem('direccion' + id);
	color = localStorage.getItem('colorContacto' + id);

	document.getElementById('n').value = n;
	document.getElementById('tel').value = tel;
	document.getElementById('mail').value = mail;
	document.getElementById('dir').value = dir;
	document.getElementById('color').value = color;


}

function editar(){
	//QUITAR EL DISABLE (removeAttribute)
	document.getElementById('n').removeAttribute("disabled");
	document.getElementById('tel').removeAttribute("disabled");
	document.getElementById('mail').removeAttribute("disabled");
	document.getElementById('dir').removeAttribute("disabled");
	document.getElementById('color').removeAttribute("disabled");
	//AGREGAR BOTON "GUARDAR"
	document.getElementById('ver').style.display = 'block';

	document.getElementById('n').classList.remove("noEditable");
	document.getElementById('tel').classList.remove("noEditable");
	document.getElementById('mail').classList.remove("noEditable");
	document.getElementById('dir').classList.remove("noEditable");
	document.getElementById('color').classList.remove("noEditable");
}


function guardarEditado(){
	//CAPTURAR LOS ELEMENTOS DE LOS INPUT
	n = document.getElementById('n').value;
	tel = document.getElementById('tel').value;
	mail = document.getElementById('mail').value;
	dir = document.getElementById('dir').value;
	color = document.getElementById('color').value;
	//GUARDAR EN EL LS (en la posicion "contactoVisto")
	localStorage.setItem('nombre' + id, n);
	localStorage.setItem('telefono' + id, tel);
	localStorage.setItem('correo' + id, mail);
	localStorage.setItem('direccion' + id, dir);
	localStorage.setItem('colorContacto' + id, color);
	//COLOCAR EL ATRIBUTO DISABLE (setAttribute)
	document.getElementById("n").setAttribute("disabled", "true");
	document.getElementById("tel").setAttribute("disabled", "true");
	document.getElementById("mail").setAttribute("disabled", "true");
	document.getElementById("dir").setAttribute("disabled", "true");
	document.getElementById("color").setAttribute("disabled", "true");
	/*document.getElementById("n").disabled = true;
	document.getElementById("tel").disabled = true;
	document.getElementById("mail").disabled = true;
	document.getElementById("dir").disabled = true;
	document.getElementById("color").disabled = true*/;
	//QUITAR EL BOTON DE GUARDAR
	document.getElementById('ver').style.display = 'none';
	window.location.assign('index.html')
}