/*
	*Noel Isaac Silva Velasco
	*Simulacion
	*U2-A3-Generacion de Numeros aleatorios
	*19-FEB-2018
*/


var n;
var seed;
var str;
var tabla = document.getElementById('tabla');
var tBody = document.getElementById('tbody');


function validarCampos() {
	seed = +document.getElementById('seed').value;
	n = +document.getElementById('NA').value;
	str = seed+"";
	if (Number.isInteger(seed) && Number.isInteger(n)) {	//Se valida que los nueros sean enteros
		if (str.length != 4) {								//se valida que la semilla tenga 4 digitos
			alert("La semilla debe contener 4 digitos.");
		} else if(n > 0) {									//Valida que el total de numeros aleatorios sea > 0
			crearTabla();
		} else {
			alert("Llene los campos requeridos con enteros mayores a cero.");
		}
	} else {
		alert("Llene los campos requeridos con enteros mayores a cero.");
	}
}

function crearTabla() {
	while (tBody.firstChild) {
    	tBody.removeChild(tBody.firstChild);
	}

	for (var i = 0; i < n; i++) {

		let tr = document.createElement("tr");
		let th = document.createElement("th");
		th.appendChild(document.createTextNode(""+(i+1)));
		tr.appendChild(th);

	 	let td1 = document.createElement("td");
	    let textoCelda1 = document.createTextNode(""+str);
	    td1.appendChild(textoCelda1);

	    let td2 = document.createElement("td");
	    str = ""+Math.abs(Math.cos(seed));				//Saca el valor absoluto del coseno de la semilla.
	    let textoCelda2 = document.createTextNode(str);
	    td2.appendChild(textoCelda2);

	    let td3 = document.createElement("td");
	    str = str.slice(6,10)							//Se extrae del resultado desde el digito 6 hasta el 10 para la nueva semilla.
	    let textoCelda3 = document.createTextNode(str);
	    td3.appendChild(textoCelda3);

	    seed = (+str);
	    let td4 = document.createElement("td");
	    let textoCelda4 = document.createTextNode(""+(seed/10000));//se divide entre 10000 para el numero aleatorio
	    td4.appendChild(textoCelda4);

	    tr.appendChild(td1);
	    tr.appendChild(td2);
	    tr.appendChild(td3);
	    tr.appendChild(td4);
	 	
	    tBody.appendChild(tr);
	}
		

  	
}