// 1.- Crear una tabla de multiplicar en documento html de un número introducido por ventana.
var multiplica= parseInt(prompt("Introduce un número para ver la/s tabla/s de multiplicar"));
document.write("<h4>Tabla del "+ multiplica+"</h4>")
for(var i= 1; i<=10; i++){
    document.write(multiplica + " x "+ i+ " = "+ multiplica*i+"<br>");
}
document.write("<hr>")

// 2.- Crear todas las tablas de multiplicar hasta el 10, mostrar en el mismo documento html.

for(var i= 1; i<=10; i++){
    document.write("<h4>Tabla del "+ i+"</h4>");
    for(var e= 1; e<=10; e++){
        document.write(i + " x "+ e+ " = "+ e*i+"<br>");
    }
    document.write("<hr>");
}


// 3.- Crear tablas de multiplicar hasta el número introducido en el apartado 1. Mostrar en el mismo documento html
for(var i= 1; i<=multiplica; i++){
    document.write("<h4>Tabla "+ i +" hasta la tabla del "+ multiplica+"</h4>");
    for(var e= 1; e<=10; e++){
        document.write(i + " x "+ e+ " = "+ e*i+"<br>");
    }
    document.write("<hr>");
}
