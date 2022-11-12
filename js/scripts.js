var form = document.getElementById('adicionar');
var total = document.getElementById('total');
form.addEventListener('click', addItem);
var codigo = Array();
var cantidad = 0;

/*var form = document.getElementById('Eliminar');
forma.addEventListener('click', deleteItem);

function deleteItem(e){
    $("#fila").remove();
}
*/

const $elemento = document.querySelector("#contenido-tb");

// El botón solo es para la demostración
const $btnLimpiar = document.querySelector("#Eliminar");

// Y en el click, limpiamos
$btnLimpiar.addEventListener("click", () => {
    $elemento.innerHTML = "";
});


function addItem(e){
  
       
       var number = document.getElementById("number").value;
       var customer = document.getElementById("customer").value;
       var dateBill = document.getElementById("dateBill").value;
       var typePay = document.getElementById("typePay").value;
       var valueBill = document.getElementById("valueBill").value;
   
       var fila="<tr><td>"+number+"</td><td>"+customer +"</td><td>"+ dateBill+"</td></tr>" +typePay +"</td><td>"+ valueBill+"</td></tr>";
   
       var btn = document.createElement("TR");
          btn.innerHTML=fila;
       document.getElementById("contenido-tb").appendChild(btn);

	
		if(codigo.includes(number)){
			
		}
	
       if (codigo.includes(number))
       {
        alert("Numero de factura ya registrado");
       }else  if(!validarFechaMenorActual(dateBill)){
        alert("Fecha no valida");}
		else if(validar(number)){
		alert("Numero de factura es un campo obligatorio");
       }else if(validarNombre(customer)){
		   alert("Nombre es obligatorio");
	   }else if(validarPago(valueBill)){
		   alert("El valor a pagar es obligatorio");
	   }
	
	
	
	
		else{
       cantidad = cantidad+parseInt(valueBill);
       var newRow = document.createElement("tr");
       newRow.name="row";
       var td1 = document.createElement("td");
       td1.appendChild(document.createTextNode(number));
       var td2 = document.createElement("td");
       td2.appendChild(document.createTextNode(customer));
       var td3 = document.createElement("td");
       td3.appendChild(document.createTextNode(dateBill));
       var td4 = document.createElement("td");
       td4.appendChild(document.createTextNode($filtered.val()));
		   td4.appendChild(document.createTextNode($filteredd.val()));
		   td4.appendChild(document.createTextNode($filtere.val()));
       var td5 = document.createElement("td");
       td5.appendChild(document.createTextNode(valueBill));
       newRow.appendChild(td1);
       newRow.appendChild(td2);
       newRow.appendChild(td3);
       newRow.appendChild(td4);
       newRow.appendChild(td5);
       codigo.push(number); 
       table.appendChild(newRow);
       total.innerHTML="";
       total.appendChild(document.createTextNode(cantidad)); 
       }

}

function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function limpia() {
    var val = document.getElementById("customer").value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i]))
            document.getElementById("customer").value = '';
    }
}

//function Solonumerosx(e){
   // const code = window.event ? e.which : e.keyCode;

   // return !( code < 48 || code > 57 );
//}

//function sololetrasx(e) {
    //var key = e.keyCode || e.which,
     // tecla = String.fromCharCode(key).toLowerCase(),
     // letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
     // especiales = [8, 37, 39, 46],
     // tecla_especial = false;

   // for (var i in especiales) {
     // if (key == especiales[i]) {
       // tecla_especial = true;
       // break;
     // }
//}

  //  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    //  return false;
   // }
  //}

 function validar(number) {
        //obteniendo el valor que se puso en campo text del formulario
        miCampoTexto = document.getElementById("number").value;
        //la condición
        if (miCampoTexto.length == 0) {
            return true;
        }
        return false;
    }

 function validarPago(valueBill) {
        //obteniendo el valor que se puso en campo text del formulario
        miCampoTexto = document.getElementById("valueBill").value;
        //la condición
        if (miCampoTexto.length == 0) {
            return true;
        }
        return false;
    }

 function validarNombre(customer) {
        //obteniendo el valor que se puso en campo text del formulario
        CampoTexto = document.getElementById("customer").value;
        //la condición
        if (CampoTexto.length == 0) {
            return true;
        }
        return false;
    }

function validarFechaMenorActual(date){
    console.log(date);
    var x=new Date();
    var fecha = date.split("/");
    x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
    var today = new Date();

    if (x >= today)
      return false;
    else
      return true;
}


function formato(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }