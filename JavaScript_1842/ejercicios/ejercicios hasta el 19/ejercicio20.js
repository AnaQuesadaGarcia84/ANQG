// 1.	Realizar los mismo que la actividad 19 pero en este caso para profesores.
// 2.	Añadiendo Datos como curso que imparte y Alumnos asignados.

var profesores= [];

document.getElementById('validar').onclick=function validar(){
    var arrDatos=[];

    //Recogemos los datos desde el formulario
    var codigo=document.getElementById('codigo').value;
    var nombre=document.getElementById('nombre').value;
    var edad=document.getElementById('edad').value;
    var mail=document.getElementById('mail').value;
    var tel=document.getElementById('telefono').value;
    var curso=document.getElementById('curso').value
    
    //console.log(codigo, nombre,edad,mail,tel,curso);

    //Introducimos los datos en el array
    arrDatos.push(codigo, nombre,edad,mail,tel,curso);
    //console.log("Desde el array de datos: "+arrDatos)



    profesores.push(arrDatos);
    console.log("Desde el array de alumnos: "+profesores)

    // document.getElementById("mostrar").innerHTML=alumnos + "<br>";
    // alumnos.forEach(function(alumno){
    //     document.getElementById("mostrar").append(alumno+"<br>");

    // } )
   // document.getElementById("mostrar").innerHTML=alumnos[0]+alumnos[1]+alumnos[2]+alumnos[3]
    for(let i=0; i<profesores.length;i++){
        var newdiv = document.createElement("div");
        document.getElementById("mostrar").appendChild(newdiv);
        newdiv.id="id"+i;
        document.getElementById(`id${i}`).innerHTML=profesores[i];

    }

}


