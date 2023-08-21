// console.log('Hola, Tyscript')

// let miVariable="Esto es una cadena de caracteres"
// let miVariable2=5

// console.log(miVariable)
// console.log(typeof miVariable2)

//Condicionales
let miNumero:number =10
let miVariable="Hola"



let num1=3
let num2=8

let suma=num1+num2

console.log(suma)

if(suma==10 && miVariable=='Hola'){
    console.log('El valor es 10')
}
else if(suma==11 || miVariable=='Hola'){
    console.log('El valor es 11')
}
else{
    console.log('El valor no es ni 10 ni 11')
}

function miFuncion(){
    return "Mi función"
}

console.log(miFuncion())

//Listas
let miLista: Array<string>=["miNombre", "miApellido", "miPagina"]
console.log(miLista)

//El objeto SET le permite almacenar valores de cualquier tipo

let miSet : Set<string>=new Set(["miNombre","miApellido","miPagina"])
miSet.add('36')
console.log(miSet)

//MAP--Esctructura de datos de par de valores clave
let miMapa: Map<string, number>= new Map([["Manuel",54],["Javier",19]])

miMapa.set("Miguel",39)
console.log(miMapa)

console.log(miMapa.get("Javier"))

//Bucles
for(const value of miLista){
    console.log(value)
}
console.log('----------')

let contador=0
while(contador<miLista.length){
    console.log(miLista[contador])
    contador++
}

//Clases
class MiClase{
    nombre: string
    edad: number

    constructor(nombre: string, edad:number){
        this.nombre=nombre
        this.edad=edad
    }
}

let miClase: MiClase= new MiClase("Javier",19)

console.log(miClase)
console.log(miClase.nombre)

