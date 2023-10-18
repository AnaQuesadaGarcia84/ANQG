
function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
    //var datos=eval(prompt("Mete los datos a comprobar"));
    // document.write(datos);
}



