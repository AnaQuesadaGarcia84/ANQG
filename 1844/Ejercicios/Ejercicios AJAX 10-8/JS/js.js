$(document).ready(function(){
    
    //Para recoger los datos petición AJAX
    $.get('https://reqres.in/api/users',{page:2},function(respuesta){
        respuesta.data.forEach((element, index)=>{
            $('#mostrar').append('<p>'+element.first_name+" "+ element.last_name+'</p>');
        });
    });

    //Para enviar los datos desde AJAX
    $('#formulario').submit(function(e){ 
        e.preventDefault();

        //Recogemos los datos desde los inputs
        var usuario={
            codigo: $('#codigo').val(),
            nombre: $('#nombre').val(),
            apellidos:$('#apellidos').val(),
            mail:$('#mail').val(),
            edad:$('#edad').val(),
            fotografia:$('#fotografia').val(),
        }

        //console.log(usuario);

        $.ajax({
            type: 'POST',
            url:$(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...")
            },
            success:function(respuesta){
                console.log(respuesta);
            },
            error:function(){
                console.log("Ha habido un error durante el registro")
            },
            timeout:1000
        })

    });
    

});//Cierre del READY FUNCTION