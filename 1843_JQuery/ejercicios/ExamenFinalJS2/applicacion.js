function inicio(){
    var cuerpo=document.getElementById('cuerpo');
    cuerpo.style.backgroundSize="cover";
    cuerpo.innerHTML= `
    <div class="contenido" id="test">
                <img src="media/contacto.jpg" alt="Imagen contacto">
                <h1>Información</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique magnam necessitatibus, rem veniam accusamus atque? Eligendi fugiat in molestiae ullam similique quasi consectetur, quidem, obcaecati, praesentium ut corporis veritatis placeat?</p>
                <a href="contacto.html"><button class="boton">Información</button></a>
            </div>`
}


function cursos(){
    var cuerpo=document.getElementById('cuerpo');
    cuerpo.style.backgroundImage="url(media/fondo2.jpg)";
    cuerpo.style.backgroundSize="cover";
    cuerpo.innerHTML= `
    <div class="contenido curso">
        <h1>Curso de JavaScript</h1>
        <video controls src="media/VideoClase.mp4"></video>
        <h3>Si cuando ves código pareciera que estás viendo un idioma extraño y que no conoces. No te vualvas loco aprende fácilmente JavaScript con nuestro nuevo curso sobre este lenguaje</h3>
        <button class="boton">Apúntate</button>
    </div>`
}

function contacto(){
    var cuerpo=document.getElementById('cuerpo');
    cuerpo.style.backgroundImage="url(media/fondo.jpg)";
    cuerpo.style.backgroundSize="cover";
    cuerpo.innerHTML= `
    <div class="contenido">
        <h1>Contacta con nosotros</h1>
        <form action="">
            <div class="inputs">
                <input type="text" id="nombre" class="nombre" placeholder="Nombre"><br>
                <input type="text" id="mail" class="mail" placeholder="E-mail"><br>
                <input type="text" id="asunto" class="asunto" placeholder="Asunto"><br>
            </div>
            <div class="textMensa">
                <textarea name="" id="mensaje" cols="20" rows="7" placeholder="Ingresa tu mensaje"></textarea><br>
                <!--button id="enviar" class="enviar">Enviar</button-->
                <input id="validar" class="enviar" type="button" value="Enviar">
            </div>
        </form>
        <p>Texto legalísimo...</p>
    </div>
    <div class="contenido2">
        
    </div>`
}