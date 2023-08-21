var ninos = parseInt(prompt("Números de niños: "));
var ninas = parseInt(prompt("Números de niñas: "));

console.log ("Niños: "+ ninos);
console.log ("Niñas: "+ ninas);
document.write("Niños: "+ ninos + "<br>");
document.write("Niñas: "+ ninas+ "<br>");

function contar(){
    var totalninos = ninos + ninas;
    var porcentninos = (ninos*100)/ totalninos;
    var porcentninas = (ninas*100)/ totalninos;

    console.log("El porcentaje de niñas es: " + porcentninas + " y el porcentaje de niños es: " + porcentninos);
    document.write("El porcentaje de niñas es: " + porcentninas + " y el porcentaje de niños es: " + porcentninos+ "<br>");
}

contar();






