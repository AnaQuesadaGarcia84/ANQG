var num1 = parseInt(prompt("Primer número"));
var num2 = parseInt(prompt("Segundo número"));

console.log("El primer número es: "+ num1);
console.log("El segundo número es: " + num2);


function compara(){
    if(num1 == num2){
        console.log(num1 + " y " + num2 + " son iguales" );
        document.write(num1 + " y " + num2 + " son iguales" );
    } else if( num1 > num2){
        console.log(num1 + " es mayor que " + num2 );
        document.write(num1 + " es mayor que " + num2 );
    }else{
        console.log(num1 + " es menor que " + num2 );
        document.write(num1 + " es menor que " + num2 );
    }
}

compara();