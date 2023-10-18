//Código para guardar en el LocalStorage
document.getElementById('validar').onclick=function validar(){
    var arrDatos=[];

    //Recogemos los datos desde el formulario
    var nombre=document.getElementById('nombre').value;
    var mail=document.getElementById('mail').value;
    var asunto=document.getElementById('asunto').value;
    var mensaje=document.getElementById('mensaje').value
    
    //Introducimos los datos en el array
    arrDatos.push(nombre,mail,asunto,mensaje);

    //Guardamos los datos en el LocalStorage
    localStorage.setItem('Mensajes', "Listado de Mensajes");
    localStorage.setItem(arrDatos, JSON.stringify(arrDatos));
}



