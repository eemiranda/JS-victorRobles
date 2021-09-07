'use strict'

var categorias = ["accion", "terror", "comedia"];
var peliculas = ["el patriota", "gladiador", "transporter", "aventura"];

var con_reverse = peliculas.reverse();

console.log(con_reverse);


var cine = [categorias, peliculas];




/*

var elemento = "";

do{

    var elemento = prompt("introduce pelicula");
    peliculas.push(elemento);

}while(elemento!= "ACABAR");

peliculas.pop();

*/

var indice = peliculas.indexOf("gladiador");

if(indice > -1){

    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();


var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);