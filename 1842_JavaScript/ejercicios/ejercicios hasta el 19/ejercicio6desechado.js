// Solicitar clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino decir clave incorrecta no quedan más oportunidades

 
// var contador=3;

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
            console.log("Estoy en el else")
        } 
    }
}

 comparacion();



// var compara = parseInt(prompt("Introduce la clave"));


// var clave=123456 
// var clave2=parseInt(prompt("Introduce la clave"));
// if (clave == clave2){ 
//    document.write("Has introducido la clave correctamente");
// }
// else if (clave > clave2) { 
//     console.log("clave incorrecta 1")
//     parseInt(prompt("Introduce la clave")); 
// }
// else{ 
//     console.log("clave incorrecta 2")
//     parseInt(prompt("Introduce la clave"));
//     document.write("Clave incorrecta")
// } 

// function compara(){
//     var clave2=parseInt(prompt("Introduce la clave"));
//     if (clave == clave2){ 
//     document.write("Has introducido la clave correctamente");
//     }
//     else if (clave > clave2) { 
//         console.log("clave incorrecta 1")
//         parseInt(prompt("Introduce la clave")); 
//     }
//     else{ 
//         console.log("clave incorrecta 2")
//         parseInt(prompt("Introduce la clave"));
//         document.write("Clave incorrecta")
//     } 
// }


// var compara= parseInt(prompt("Introduce la contraseña: "));
// function comparacion(){
//     if(compara==123456){
//         document.write("Has introducido la clave correctamente" + "</br>");
//         console.log("Has introducido la clave correctamente");
//     }
//     else if(compara!=123456){
//         parseInt(prompt("Introduce la contraseña: "));
//     }
//     else{
//         document.write("No has introducido la clave correctamente" + "</br>");
//         console.log("No has introducido la clave correctamente");
//     }
// }