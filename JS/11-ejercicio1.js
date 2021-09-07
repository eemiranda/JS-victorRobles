'use strict'

var numero1 = parseInt(prompt('introduce el primer numero', 0)) 
var numero2 = parseInt(prompt('introduce el sgundo numero',  0)) 

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('introduce el primer numero', 0))
    numero2 = parseInt(prompt('introduce el sgundo numero',  0))
}

if(numero1 == numero2){
    alert("los numeros son iguales")
}else if(numero1 > numero2){
    alert("el numero mayor es: "+numero1+" y el numero menor es: "+numero2)
}else if(numero2 > numero1){
    alert(" el numero mayor es: "+numero2+" y el numero menor es: "+numero1)
}else{
    alert("introduce numeros correctos")
}