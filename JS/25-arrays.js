'use strict'

var nombre = "eliecer miranda";
var nombres = ["maggi", "linda", "nati", "abuelo", true, 33];

var lenguajes = new Array("PHP", "JS", "java", "go", "C", " pascal");

/*

var elemento = parseInt(prompt("cual elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("introduce el numero menor que "+nombres.length);

}else{
    alert("el usuario seleccionado es: "+nombres[elemento]);
}


*/

document.write("<h1>Lenguajes de programacion del 2021</h1>");
document.write("<ul>");

/*
for(var i= 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

/*lenguajes.forEach((c, i, arr)=>{
    document.write("<li>"+i+" -- "+c+"</li>");
    console.log(arr)
*/

for( let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");

}

document.write("</ul>");



// busquedas

var precios = [10, 20, 50, 80, 12];

var busqueda = precios.some(precio => precio < 10);

//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");


 

console.log(busqueda)
    


