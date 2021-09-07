'use strict'

//condicional IF

/*
var edad = 30

var nombre = "david suarez"

if(edad >= 18){
    console.log(nombre+" tiene "+edad+" años, Es mayor de edad")

    if(edad <= 33){
        console.log("y todavia eres milenial")
    }else if(edad >= 70){
        console.log(" eres un anciano")
    }else{
        console.log(" ya no eres milenial")
    }


}else{
    console.log(nombre+" tiene "+edad+" años, Es menor de edad")
}
*/
//operadores logicos
// and &&
// or ||

var year = 2005
// negacion !



if(year != 2016){
    console.log("el año no es igual a 2016, realmente es el "+year)
}

// and

if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("estamos en la era actual")

}else{
    console.log("estamos en la era postmoderna")
}


// or 

if(year == 2008 || (year >= 2018 && year == 2028) ){
    console.log(" el año acaba en 8")
}else{
    console.log(" año no registrado")
}
