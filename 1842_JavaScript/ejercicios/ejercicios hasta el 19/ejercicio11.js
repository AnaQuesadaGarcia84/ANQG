function verrificar(){
    var user= prompt("Introduce tu usuario");

    if(user=="Admin"){
        console.log("Estoy en el primer if");
    var contrasena= prompt("Introduce la contraseña");
        if(contrasena=="webmaster"){
            console.log("Estoy en el primer if de la contraseña");
            document.write("<h1>Bienvenido </h1>");
        }
        else{
            document.write("<h1>Contraseña incorrecta</h1>");
        }
    }
    else if(user===null || user===""){
        console.log("Estoy en el primer else  if")
        document.write("<h1>Cancelado</h1>");
    }
    else if(user!="Admin"){
        console.log("Estoy en el segundo else if")
        document.write("<h1>Usuario incorrecto</h1>");
    }
}

verrificar();