function comparacion(){
    console.log("Hola estás en la función")
    for (var i=0;i<3;i++) { 
        var compara = Number(prompt("Introduce la clave"));
        if(compara==123456){
            console.log("Estoy en el if")
            document.write("<h1>Has introducido la clave correctamente</h1>" + "</br>");
            break;
        }
        else{
            console.log("Estoy en el else");
            document.write("<h1>Te has quedado sin intentos</h1>" + "</br>");
        } 
    }
}

 comparacion();

