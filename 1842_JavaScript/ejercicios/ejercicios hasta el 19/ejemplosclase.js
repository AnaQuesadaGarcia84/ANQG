//Pedimos por prompt los números al usuario
//var a= parseInt(prompt("Introduce el primer número: "));
//var b= parseInt(prompt("Introduce el segundo número: "));

//Creamos función que nos haga las 4 operaciones 
// function calcular(a , b){
//     document.write("Sumar: " + (a+b) + "<br>");
//     document.write("Restar: " + (a-b) + "<br>");
//     document.write("Multiplicación: " + (a*b) + "<br>");
//     document.write("Dividisión: " + (a/b) + "<br>");
//     document.write("<hr>");
// }

//document.write("Primer número: "+a +" Segundo número: "+ b + "<br>");
//calcular(a,b);

//Creamos un for para que nos haga las operaciones con los números dados en el bucle
// for(var n= 1; n<= 5; n++){
//     document.write(n + " <br>");
//     calcular(n, 5);
// }

//PARÁMETROS OPCIONALES

function calcular(a , b, ver = false){
    if(ver == false){
        document.write("Sumar: " + (a+b) + "<br>");
        document.write("Restar: " + (a-b) + "<br>");
        document.write("Multiplicación: " + (a*b) + "<br>");
        document.write("Dividisión: " + (a/b) + "<br>");
        document.write("<hr>");
    } else{
        document.write("No tengo nada que mostrar!!!");
    }    
}

calcular(20,5, true);
