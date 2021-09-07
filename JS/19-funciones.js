'use strict'



function porConsola(numero1, numero2){
    console.log("suma: "+(numero1+numero2));
    console.log("resta: "+(numero1-numero2));
    console.log("multiplicacion: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2))
    console.log("------------------------------------");
}

function porPantalla(){
    document.write("suma: "+(numero1+numero2+"<br/>"));
    document.write("resta: "+(numero1-numero2)+"<br/>");
    document.write("multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("division: "+(numero1/numero2)+"<br/>")
    document.write("------------------------------------"+"<br/>");

}

function calculadora(numero1, numero2, mostrar = false){


    if(mostrar == false){
        porConsola(numero1, numero2);


    }else{
        porPantalla(numero1, numero2);

    }

    return true
    

}




 for( var i = 1; i<= 10; i++){

    console.log(i);

    calculadora(i, 7, true);

}