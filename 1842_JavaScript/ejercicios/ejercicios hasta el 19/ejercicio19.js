// 1.	Utilizando el documento html de la actividad 18, se propone la creación de un script para ir creando alumnos (cantidad 3 mínimo) en un array multidimensional.
// 2.	Mostrar la información de los alumnos en una tabla en el documento html.
var alumnos= [];

document.getElementById('validar').onclick=function validar(){
    var arrDatos=[];

    //Recogemos los datos desde el formulario
    var codigo=document.getElementById('codigo').value;
    var nombre=document.getElementById('nombre').value;
    var edad=document.getElementById('edad').value;
    var mail=document.getElementById('mail').value;
    var tel=document.getElementById('telefono').value;
    var lenguaje=document.getElementById('lenguaje').value
    
    //console.log(codigo, nombre,edad,mail,tel,lenguaje);

    //Introducimos los datos en el array
    arrDatos.push(codigo, nombre,edad,mail,tel,lenguaje);
    //console.log("Desde el array de datos: "+arrDatos)



    alumnos.push(arrDatos);
    console.log("Desde el array de alumnos: "+alumnos)

    // document.getElementById("mostrar").innerHTML=alumnos + "<br>";
    // alumnos.forEach(function(alumno){
    //     document.getElementById("mostrar").append(alumno+"<br>");

    // } )
   // document.getElementById("mostrar").innerHTML=alumnos[0]+alumnos[1]+alumnos[2]+alumnos[3]
    for(let i=0; i<alumnos.length;i++){
        var newdiv = document.createElement("div");
        document.getElementById("mostrar").appendChild(newdiv);
        newdiv.id="id"+i;
        document.getElementById(`id${i}`).innerHTML=alumnos[i];

    }

}


