
$(document).ready(function () {
    const contenido=$('#contenido')

    //Insertamos el contenido de ACCESO
    $('#acceso').on("click",function(){
        var registro= `
            <div class="inicio">
                <h2>Inicia sesión</h2>
                <form action="">
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario"><br>
                    <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña"><br>
                    <input type="submit" value="Iniciar sesión" id="iniciar" class="iniciar">
                </form>
            </div>`;

        contenido.empty();
        contenido.append(registro);
    })

    //Insertamos el contenido de REGISTRO
    $("#registro").on("click", function(){
        var registro = `
            <div class="registro">
                <h2>Regístrate</h2>
                <form action="" id="formRegis">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre"><br>
                    <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos"><br>
                    <input type="text" name="usuario" id="userRegistro" placeholder="Usuario"><br>
                    <input type="email" name="mail" id="mail" placeholder="E-mail"><br>
                    <input type="password" name="contrasena" id="contra" placeholder="Contraseña"><br>
                    <input type="password" name="contrasena" id="contra2" placeholder="Repite contraseña"><br>
                    <input type="text" name="estudios" id="estudios" placeholder="Nivel de estudios"><br>
                    <input type="tel" name="telefono" id="telefono" placeholder="Teléfono"><br>
                    <input type="submit" value="Registrarse" id="registrarse" class="iniciar">
                </form>
            </div>`;
            
        contenido.empty();
        contenido.append(registro);


        $('#formRegis').submit(function (e) {
            e.preventDefault()
    
            var datosUsu = [];
    
            var nombre = document.getElementById('nombre').value;
            var apellidos = document.getElementById('apellidos').value;
            var mail = document.getElementById('mail').value;
            var contra = document.getElementById('contra').value;
            var contra2 = document.getElementById('contra2').value;
            var estudios = document.getElementById('estudios').value;
            var telefono = document.getElementById('telefono').value;
    
            console.log(nombre + "--" + apellidos + "--" + mail + "--" + contra + "--" + contra2 + "--" + estudios + "--" + telefono);
    
            datosUsu.push(nombre, apellidos, mail, contra, contra2, estudios, telefono);

            localStorage.setItem("datosUsu", JSON.stringify(datosUsu));
    
    
        });
    });

    //Insertamos el contenido de INFORMACIÓN
    $('#informacion').on("click", function(){
        var informacion= `
            <div class="nosotros">
                <h2>Sobre nosotros</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates laudantium asperiores itaque quam vitae in eligendi quis eos autem quibusdam facilis nostrum praesentium ad, earum, voluptatem dolore dolor doloribus sit?
                Veritatis rem voluptatum laudantium ipsum aperiam ducimus voluptates placeat illo nobis expedita ad delectus omnis, soluta quas deleniti voluptatibus recusandae aut ipsam quo quasi tempora dicta quae atque doloremque! Hic!</p>
                <p>Quo, iusto? Eaque impedit aliquam nemo tempora? Ab ut debitis sequi animi delectus magni inventore veritatis neque veniam fugiat pariatur ducimus sapiente consequuntur ex voluptate labore, libero doloremque nam voluptatem.
                Accusamus laudantium non voluptatem dolorum consequatur quo ab unde quasi corrupti maiores sapiente, suscipit voluptatibus culpa odio incidunt accusantium eaque, harum voluptate adipisci! Nulla temporibus laborum recusandae ipsa, magni fugit!
                Facere obcaecati sed officiis omnis laborum cupiditate fugit doloribus, temporibus ad nihil eligendi, aliquid iste voluptas non? Non blanditiis eos atque in, odio itaque quas magni cum dolores ad deleniti!</p>
                <h3>Nuestras instalaciones</h3>
                <img src="Media/academia.jpg" alt="Foto aula" class="aula1">
                <p class="pAula">
                Atque quasi porro sint asperiores architecto aut minus ipsum magnam facere, optio veritatis fugit doloribus natus reiciendis veniam impedit debitis? Placeat tenetur sequi ad magnam illum reprehenderit odio doloribus voluptate?
                Nam ex dolorem itaque officia maxime vero amet nemo, laborum error! Tempore dolore similique expedita consequuntur ad recusandae sequi nulla quia praesentium, consectetur beatae eaque assumenda veritatis minus quos iure?
                Et hic architecto cum sit odio nulla, distinctio eum earum qui modi eligendi exercitationem, magni minus quia consequuntur rerum! Maxime magnam itaque rerum repellat sapiente accusamus nihil reprehenderit id et!
                Officia at odit quisquam quibusdam dicta id itaque explicabo magnam excepturi recusandae, maiores earum similique. Sequi esse eius pariatur, ab labore fugiat voluptate qui ipsa, error quia, dolores maiores nam?
                </p>
                <p>
                Pariatur laborum nemo sapiente assumenda excepturi necessitatibus impedit eveniet at nam! At eum, minima ea sint vel facilis magnam neque deleniti corrupti nihil, esse explicabo vitae velit, repellendus id sed!
                Suscipit quisquam eius eligendi, id laboriosam, eos incidunt provident molestiae illum cumque nam temporibus placeat voluptates culpa? Similique, numquam quidem? Provident aut nisi nam qui quidem ipsum porro non consequuntur.
                </p>
            </div>`
        contenido.empty();
        contenido.append(informacion);
    })

    //Insertamos el contenido de CURSO
    $('#curso').on('click', function(){
        var curso=`
            <div class="curso">
                <h2>Nombre del curso</h2>
                <img src="Media/curso.png" alt="Imagen del curso" class="cursoImg">
                <h3>Contenidos del curso</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>TypeScript</li>
                    <li>POO</li>
                    <li>Angular</li>
                </ul>
                <h3>Acceder a los modulos del curso</h3>
                <input type="submit" value="Accede al curso" class="iniciar" id=" accederCur">
            </div>`
        contenido.empty();
        contenido.append(curso);
    })

    //Insertamos el contenido de CONTACTO
    $('#contacto').on('click', function(){
        var contacto=`
            <div class="contacto">
                <h2>Contacta con nostros</h2>
                <form action="">
                    <input type="text" name="name" id="name" placeholder="Nombre"><br>
                    <input type="email" name="email" id="email" placeholder="E-Mail"><br>
                    <input type="text" name="asunto" id="asunto" placeholder="Asunto"><br>
                    <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea><br>
                    <input type="submit" value="Enviar" class="iniciar">
                </form>
            </div>`
        contenido.empty();
        contenido.append(contacto);
    })

    //Cambiamos al modo oscuro y el modo claro
    const oscuro = $('#oscuro');
    const claro = $('#claro');

    oscuro.click(function () {
        $('#body')
            .css('background-color', 'black')
            .css('color', 'white');
        $('#header')
            .css('background-color', '#202020');
        //Cambiamos el logo para que se pueda leer el testo del mismo
        document.querySelector('.logo').src = "Media/logoClaroMini.png";
        $('nav button')
            .css('background-color', '#161515')
            .css('color', '#e2f3f9');
        $('nav button').hover(function () {
            $(this).css("color", "lightblue")
        },
            function () {
                $(this).css("color", "#e2f3f9");
            })
        $('.publi')
            .css('background-color', '#202020');
        $('.eslogan')
            .css('color', '#e2f3f9');
        $('.titulo')
            .css('background-color', '#161515');
        $('.acordeon')
            .css('background-color', '#202020')
            .css('color', '#e2f3f9')
        $('.contraste')
            .css('background-color', 'black')
            .css('color', '#e2f3f9');
        $('.contraste')
            .hover(function () {
                $(this).css("color", "#7dadbd")
            },
                function () {
                    $(this).css("color", "#e2f3f9")
                })
        $('#footer')
            .css('background-color', '#202020');
        $('#footer li')
            .css('color', '#e2f3f9');
        $('#footer li a')
            .css('color', '#e2f3f9');
    })

    claro.click(function () {
        $('#body').css('background-color', 'white');
        $('#header').css('background-color', '#e2f3f9');
        //Cambiamos el logo para que se pueda leer el testo del mismo
        document.querySelector('.logo').src = "Media/logomini.png";
        $('nav button')
            .css('background-color', 'lightblue')
            .css('color', '#003366');

        $('nav button').hover(function () {
            $(this)
                .css("color", "lightblue")
                .css('background-color', '#003366')
        },
            function () {
                $(this)
                    .css("color", "#003366")
                    .css('background-color', "lightblue")
            })
        $('.publi')
            .css('background-color', '#e2f3f9');
        $('.eslogan')
            .css('color', '#003366');
        $('.titulo')
            .css('background-color', '#003366');
        $('.acordeon')
            .css('background-color', 'lightblue')
            .css('color', 'black');
        $('.contraste').css('background-color', '#003366')
            .css('color', '#lightblue');
        $('.contraste').hover(function () {
            $(this)
                .css("color", "white")
                .css('background', 'black')
        },
            function () {
                $(this)
                    .css("color", "lightblue")
                    .css('background-color', '#003366');
            })
        $('#footer')
            .css('background-color', 'lightblue');
        $('#footer li')
            .css('color', '#003366');
        $('#footer li a').css('color', '#003366');
    });


});

