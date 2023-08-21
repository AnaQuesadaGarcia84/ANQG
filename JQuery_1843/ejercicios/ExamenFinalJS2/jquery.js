$(document).ready(function(){
    $("#alumno").click(function(){
        $(".contenido").css("background-image", "url('media/fondoalumnos.jpg')");
        $(".h1").text('Bienvenido alumno');
        $(".texto").text('Si quieres ponerte en contacto con nosotros pulsa el botón de información')
    })

    //Ventana emergente
    //Abrirla
    $("#profesor").click(function(){
        $('.profesorEmergente').addClass('active');
    });

    //Cerrarla
    $(".cerrar").click(function(){
        $('.profesorEmergente').removeClass('active');
    });

    //Cambiamos estilos para la versión nocturna

})//Cierre del document ready