'use strict'

//DOM

function cambiaColor(color){
    caja.style.background = color;
}




//var caja = document.getElementById("micaja");
/*
var caja = document.querySelector("#micaja");



caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

*/
//elmentos por su etiqueta

var todosLosDvis = document.getElementsByTagName("div");

 var seccion = document.querySelector("#miseccion");

 var hr = document.createElement("hr");
 

 var valor;

for(valor in todosLosDvis){
    if(typeof todosLosDvis[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode (todosLosDvis[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}


seccion.append(hr);





var contenidoEnTexto =  todosLosDvis[2];
contenidoEnTexto.innerHTML = "otro texto para este div"
contenidoEnTexto.style.backgroundColor = "blue";





console.log(contenidoEnTexto);




//console.log(caja)