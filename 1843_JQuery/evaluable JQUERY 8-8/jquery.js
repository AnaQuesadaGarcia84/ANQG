$(document).ready(function(){
    //Hacemos primero todas las llamadas al DOM
    const cuerpo=$('#cuerpo');
    const menu=$('.menu');
    const contraste=$('#contraste');
    const seccion3=$('#seccion3');
    const cabSeccion3=$('.cabSeccion3');
    const contSeccion3=$('.contSeccion3');

    $(function(){
        $('imagen1').tooltip({
          track: true
        });
    });

    $(function(){
        $('contraste').tooltip({
          track: true
        });
    });
    //Funcionalidad del botón que cambia el estilo de la web
    var daltonico=false;

    contraste.click(function (){
        daltonico=!daltonico;
        
        if(daltonico){
            cuerpo.css('background-color', '#000000')
            .css('color', '#ffffff').css('font-size','1.3em');
            menu.css('color', '#ffffff');
            menu.hover(function(){
                $(this).css("color", "yellow");
                }, function(){
                $(this).css("color", "white");
            });
            seccion3.css('background-color', '#000000');
            cabSeccion3.css('background-color', '#313131');
            contSeccion3.css('background-color', '#131313');
        }
        else{
            cuerpo.css('background-color', 'white')
            .css('color', 'black').css('font-size','1em');
            menu.css('color', '#000000');
            menu.hover(function(){
                $(this).css("color", "#00676c");
                }, function(){
                $(this).css("color", "black");
            });
            seccion3.css('background-color', '#00676c');
            cabSeccion3.css('background-color', '#01393c');
            contSeccion3.css('background-color', '#00676c');
        }

    })//Cierre de la función del click del botón CONTRASTE


    //Contenido en acordeón
    $( function() {
        seccion3.accordion({
          collapsible: true
        });
    } );
})//Cierre de la función para leer el documento