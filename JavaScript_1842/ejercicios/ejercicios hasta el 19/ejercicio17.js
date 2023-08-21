// Leer una cadena de texto en un formulario y generar un array con la función split(). 
// Mostrar la siguiente información: 
// •	Número de palabras
// •	primera palabra
// •	última palabra

// Sacar toda esta información en una ventana nueva.


var cadena= "Las locas son las que deciden lo que pasa en el mundo"
var separar= cadena.split(' ');

console.log(separar);
console.log(separar[0]);
console.log(separar[separar.length-1]);



// document.getElementById("escribir").innerHTML="<h2>Mi texto: "+ cadena+"</h2>"+"<h2>La cantidad de palabras es: "+separar.length+"</h2>"+
// "<h2>Primera pocisión del array: "+separar[0]+"</h2>"+"<h2>Última posición del array: "+separar[separar.length-1]+"</h2>";

function pulsar(){
    var arr=[];
    arr=document.formulario.miarea.value.split(" ");
    console.log(arr);
    var n_Palabras=arr.length;
    var p_Palabra=arr[0];
    var u_Palabra=arr[arr.length-1];
    document.getElementById("resultado").innerHTML="Número de palabras: " +n_Palabras+"<br> Primera palabra: "+p_Palabra+"<br> Última palabra: "+u_Palabra
}
