'use strict'

var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tus appellidos");

var texto = `
<h1>hola que tal</h1>
<h3>mi nombre es: ${nombre}</h3>
<h3>mis apellidos son: ${apellidos}
`;

document.write(texto);