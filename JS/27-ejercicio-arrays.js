//1 pida 6 numeros par pantallay meterlos en un arrays,
//2 mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola,
//3 ordenarlos y mostrarlos
//4 invertir su orden y mostrarlo
// 5 mostrar cuantos elementos tiene el array
//6 busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice, usar funciones,

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>contenido del array"+textoCustom+"</h1>");

    document.write("<ul>")
    elementos.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li><br/>");

    });
    document.write("</ul>");
}



//---------------------------------------------------------------------------------------

//var numeros = new Array(6);
var numeros = [];


for(var i= 0; i <= 5; i++){

    //numeros[i] = parseInt(prompt("introduce un numero", 0)); 
    numeros.push(parseInt(prompt("introduce un numero",0)));

}

// mostrar en pagina, 


mostrarArray(numeros);


//mostrar por consola


console.log(numeros);



// ordenar y mostrar, 

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, " ordenados");



//invertir y mostrar

numeros.reverse();
mostrarArray(numeros, " revertidos");


// cuantos elementos tiene, 

document.write("<h1>El array tiene: "+numeros.length+" elementos");



// busqueda

 var busqueda = parseInt(prompt("busca un numero",0));
 var posicion = numeros.findIndex(numero => numero == busqueda);


 if(posicion && posicion != -1){
     document.write("<hr><h1>ENCONTRADO!!!</h1>");
     document.write("<h1>posicion de la busqueda: "+posicion+"</h1><hr/>");
    
 }else{
     document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
 }
