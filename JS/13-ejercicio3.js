'use strict'

var numero1 = parseInt(prompt("introduce el primero numero"))
var numero2 = parseInt(prompt("introduce el segundo numero"))



document.write("<h1> del "+numero1+" al "+numero2+" estan estos numeros</h1>")
for (var i = numero1; i<= numero2; i++){
    document.write(i+ "<br/>")

}