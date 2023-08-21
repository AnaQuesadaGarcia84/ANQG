// 1.Crear un documento html con un formulario para pedir los datos de los alumnos:
//     a.Código
//     b.Nombre y Apellidos
//     c.Edad
//     d.Correo electrónico
//     e.Teléfono
//     f.Un select para seleccionar un tema (HTML, CSS, JavaScript)
// 2.Crear un script para ir rellenando un array con los datos de un alumno.
// 3.Mostrar los datos del alumno en el documento html.


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

    document.getElementById("mostrar").innerHTML= arrDatos;
    // alert(arrDatos);
}