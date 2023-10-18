$(document).ready(function(){
    //Llamanos a los botones del DOM
    const botnUno= $('#uno');
    const botnDos= $('#dos');
    const botnTres= $('#tres');
    const botnCuatro= $('#cuatro');
    const botnCinco= $('#cinco');
    const botnSeis= $('#seis');
    const botnSiete= $('#siete');
    const botnOcho= $('#ocho');
    const botnNueve= $('#nueve');
    const botnDiez= $('#diez');
    const botnOnce= $('#once');
    const botnDoce= $('#doce');

    //Llamamos a los contenedores del DOM
    const cont1=$('.cont1');
    const cont2=$('.cont2');
    const cont3=$('.cont3');
    const cont4=$('.cont4');
    const cont5=$('.cont5');
    const cont6=$('.cont6');
    const cont7=$('.cont7');
    const cont8=$('.cont8');
    const cont9=$('.cont9');
    const cont10=$('.cont10');
    const cont11=$('.cont11');
    const cont12=$('.cont12');
    const contenedor=$('.contenedor')

    //Botón 1 abre imagen de un avatar
    $( function() {
        $( "#modal_container" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        botnUno.on( "click", function() {
          $( "#modal_container" ).dialog( "open" );
        });
    });

    //Botón 2 oculta el contenedor 2
    botnDos.click(function() {
        cont2.hide( "fade", "slow" );
    });

    //Botón 3 vuelve a mostrar el contenedor2
    botnTres.click(function() {
        cont2.show( "fade", 1000 );
    });

    //Botón 4 cambia el fondo del MAIN
    botnCuatro.click(function(){
        $('main').css('background-image', 'url(media/fondo.jpg)');
    });

    //Botón 5 cambia el texto del contenedor 5
    botnCinco.click(function(){
        $('.texto').text('Soy un texto añadido desde jQuery');
    })
    
    //Botón 6 cambia los estilos del contenedor 6 a alto contraste
    botnSeis.click(function(){
        cont6.css('background-color', 'black')
        .css('color', 'white');
        botnSeis.css('background-color', '#474747')
        .css('border', '2px solid white')
        .css('color', 'white')
    });

    //Botón 7 inserta una imagen en el contenedor 7

    //La variable REPETIR la iniciamos en true para cambiarla después para permitir que la acción solo se ejecute una vez
    var repetir=true
    botnSiete.click(function(){
        if(!repetir){return;}

        var image= new Image();
        var src='media/hada.png'

        image.src=src
        cont7.append(image);
        repetir=false;
    });

    //Botón 8 me hace un TOGGLE con el recuadro
    $( function() {
        botnOcho.on("click", function(){
          cont8.toggleClass( "newClass", 1000 );
        });
    });

    //Botón 9 nos muestra una barra de progreso
    $( function() {
        botnNueve.on("click", function(){
            var progressbar = $("#progressbar"),
            progressLabel = $(".progress-label");
            
            progressbar.show('fade',1000);
            progressLabel.show('fade', 1000)
     
            progressbar.progressbar({
                value: false,
                change: function() {
                    progressLabel.text( progressbar.progressbar( "value" ) + "%" );
                },
                complete: function() {
                    progressLabel.text( "Complete!" );
                }
            });
     
            function progress() {
            var val = progressbar.progressbar( "value" ) || 0;
     
            progressbar.progressbar( "value", val + 2 );
     
            if(val<99){
                setTimeout(progress, 80);
            }
            } 
            setTimeout( progress, 2000 );
        })
    });

    //Botón 10 se menea el div
    botnDiez.click(function() {
        cont10.effect( "bounce", "slow" );
    });

    //Botón 11 quitar la clase del contenedor 8
    botnOnce.click(function(){
        cont8.removeClass('newClass')
    });

    //Botón 12 cuenta los clicks
    botnDoce.click(function(){
        cont12.css('fontSize', '1.6em')
    })

});//Cierre de la función READY