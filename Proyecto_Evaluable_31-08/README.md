Aplicación de compra de ilustraciones
La aplicación en cuestión será una especie de galería de arte donde autores pueden exponer y vender sus ilustraciones. Los usuarios pueden encargar una ilustración a un artista o lanzar su petición en una especie de foro donde los ilustradores pueden elegir hacer lo que está pidiendo el usuario. Si una petición de usuario ya ha sido seleccionada por un artista, ya no estará disponible.

1.Interacción del usuario con la aplicación

Botonera general:
1.	Registro: Nos llevará a el formulario de registro, en el cual nos podemos registrar como usuario o como artista
2.	Inicio sesión: Nos abrirá formulario de inicio de sesión
3.	Foro: Donde podrás ponerte en contacto con los artistas, otros usuarios y hacer peticiones de ilustraciones
4.	Ilustradores: En este apartado podemos encontrar todos los artistas registrados, información sobre estos y ver sus obras
5.	Ilustraciones: Nos llevará a una galería con las ilustraciones a la venta que podremos organizar por temática o por artista.
6.	Buscador: En el cual podemos buscar artistas u obras por su nombre
7.	Carrito: Nos llevará a la zona donde podemos ver los productos seleccionados por el usuario y su valor monetario más los gastos de envío del pedido.

Botones de apartados:
1.	En el apartado de artistas tendremos un select o desplegable para organizarlos por temáticas
2.	En el apartado de ilustraciones tendremos un select o desplegable para ordenar por temáticas
3.	En el apartado de ilustraciones tendremos un select para ordenar por artistas

Formulario Registro:
A.	Nombre y apellidos
B.	Usuario
C.	DNI
D.	Mail
E.	Contraseña
F.	Repetir contraseña
G.	Dirección
H.	Código postal
I.	Provincia
J.	País
K.	Select o checkbox para indicar si eres usuario o artista.

Formulario inicio sesión:
A.	Mail 
B.	Contraseña
C.	Botón enviar
D.	Botón de registrarse
Formulario de contacto:
A.	Nombre o usuario
B.	Mail
C.	Asunto
D.	Text área con el mensaje 
E.	Botón enviar

Formulario para subida de obras por los artistas:
A.	Campo en el que cargar la imagen
B.	Nombre de la obra
C.	Precio de la obra
D.	Artista
E.	Categoría de la ilustración
F.	Crear categoría si no existe
G.	Botón subir 

2. Procesamiento de datos

Formulario de registro:
•	Los datos se validarán antes de enviarlos al servidor y crear el nuevo usuario
•	Solicitará validación por correo

Formulario inicio sesión:
•	Se validará si el usuario está registrado en la base de datos y si no se le invitará a registrarse

Formulario de contacto:
•	Se enviará mail al administrador y este lo contestará

Formulario para subida de obras por los artistas:
•	Se subirán a la base de datos 
•	Se verificará que la obra no pertenezca a otro artista

3. Procesos de salida

Usuario registrado:
a)	Al iniciar sesión: 
a.	Podrá ver y publicar en el foro 
b.	Realizar una compra

Artista:
a)	Al iniciar sesión: 
a.	Podrá subir ilustraciones
b.	Contestar y publicar en el foro
c.	Seleccionar una petición de ilustración de un usuario en el foro

Ilustraciones:
a)	Para publicarla:
a.	Se verificará autoría de la obra por el artista
b)	Una vez verificada:
a.	Se mostrará a los usuarios y otros artistas 
b.	Se añadirá la categoría de la ilustración en la app si esta no existe y si no se añadirá la ilustración a la categoría determinada por el artista
c.	Se añadirá a la galería personal del artista

Usuario no registrado:
a)	Podrá ver las ilustraciones
b)	Podrá ver los perfiles de los artistas
c)	Si quiere realizar compra ha de registrarse

Proceso de compra (solo usuarios registrados):
a)	Usuario selecciona obra a que quiere comprar
b)	Llega petición al artista 
a.	Si la tiene disponible:
i.	Si la tiene disponible se le solicitará el pago al usuario
ii.	Una vez realizado el pago se le mandará al usuario un mail como que la compra se ha realizado y un código de seguimiento del envío
b.	Si no la tiene disponible:
i.	El artista se comunicará con el usuario para decirle cuanto tiempo tardará en realizarla
ii.	Una vez realizada la obra se hace el proceso del punto anterior

4. Componentes de Angular
Necesitaremos los siguientes componentes:
Registro
	Donde tendremos el formulario de registro en la aplicación
Sesión
	Donde tendremos el formulario de inicio de sesión
Foro
	Donde estará el foro 
Ilustradores
	Donde se mostrarán todos los ilustradores registrados en la app
Ilustrador
	Donde se mostrará la ficha de ese ilustrador y se podrán ver algunas de sus obras

Ilustraciones
	Donde se mostrará todas las ilustraciones a la venta en la app
Ilustración
	Donde se mostrará una vista individual de la obra seleccionada con sus datos, precio etc

Buscador
	En el cual tendremos un formulario donde podremos buscar artistas u obras
Carrito
	Donde se nos mostrarán los artículos comprados
Header
	Donde tendremos la barra de navegación de la app
Contacto
	Donde tenemos el formulario de contacto
Subir Obra
	Donde los artistas pueden subir las obras a vender



