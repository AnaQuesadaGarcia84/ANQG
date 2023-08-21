// console.log('Hola, Tyscript')
// let miVariable="Esto es una cadena de caracteres"
// let miVariable2=5
// console.log(miVariable)
// console.log(typeof miVariable2)
//Condicionales
var miNumero = 10;
var miVariable = "Hola";
var num1 = 3;
var num2 = 8;
var suma = num1 + num2;
console.log(suma);
if (suma == 10 && miVariable == 'Hola') {
    console.log('El valor es 10');
}
else if (suma == 11 || miVariable == 'Hola') {
    console.log('El valor es 11');
}
else {
    console.log('El valor no es ni 10 ni 11');
}
function miFuncion() {
    return "Mi función";
}
console.log(miFuncion());
//Listas
var miLista = ["miNombre", "miApellido", "miPagina"];
console.log(miLista);
//El objeto SET le permite almacenar valores de cualquier tipo
var miSet = new Set(["miNombre", "miApellido", "miPagina"]);
miSet.add('36');
console.log(miSet);
//MAP--Esctructura de datos de par de valores clave
var miMapa = new Map([["Manuel", 54], ["Javier", 19]]);
miMapa.set("Miguel", 39);
console.log(miMapa);
console.log(miMapa.get("Javier"));
//Bucles
for (var _i = 0, miLista_1 = miLista; _i < miLista_1.length; _i++) {
    var value = miLista_1[_i];
    console.log(value);
}
console.log('----------');
var contador = 0;
while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}
//Clases
var MiClase = /** @class */ (function () {
    function MiClase(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return MiClase;
}());
var miClase = new MiClase("Javier", 19);
console.log(miClase);
console.log(miClase.nombre);
