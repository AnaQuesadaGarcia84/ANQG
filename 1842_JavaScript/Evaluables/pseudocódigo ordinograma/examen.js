// InicioProceso
//    Escribir "¿Tienes el titulo de bachiller?"
//    Leer bachiller
//    si (bachiller="si") Entonces
//       Escribir "Puedes acceder al grado superior"
//    Sino
//       Escribir "¿Tienes la prueba de acceso superada?"
//       Leer prueba_acceso
//       si (prueba_acceso="si") Entonces
//          Escribir "Puedes acceder al grado superior"
//       Sino
//          Escribir "No puedes acceder a un grado superior"
//       FinSi
//    FinSi
// FinProceso

var bachiller= prompt("¿Tienes el titulo de bachiller?");

if(bachiller.toLowerCase()=="si"){
    console.log("Puedes acceder al grado superior")
    document.write("<h1>Puedes acceder al grado superior</h1>");
}
else if(bachiller.toLowerCase()=="no"){
    console.log("¿Tienes la prueba de acceso superada?");
    prompt("¿Tienes la prueba de acceso superada?");
    if(bachiller.toLowerCase()=="si"){
        console.log("Puedes acceder al grado superior");
        document.write("Puedes acceder al grado superior");
    }
    else{
        console.log("No puedes acceder al grado superior");
        document.write("<h1>No puedes acceder al grado superior</h1>");
    }
}
