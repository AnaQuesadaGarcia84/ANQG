//EJERCICIO 2
document.getElementById('calcula').onclick=function operaciones(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var suma= num1+num2;
    var resta= num1-num2;
    var multiplica=num1*num2;
    var divide=num1/num2;

    document.getElementById('operandos').innerHTML= 'Primer número: '+num1+ ' Segundo número: '+num2 + '<br>'+ 'El resultado al sumarlos es: '+suma + '<br>'+ 
    'El resultado al restarlos es: '+resta+ '<br>'+ 'El resultado al multiplicarlos es: '+multiplica+ '<br>'+'El resultado al dividirlos es: '+divide+ '<br>';  
}

//EJERCICIO 3
document.getElementById('compara').onclick=function compara(){
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;

    if(num3 == num4){
        document.getElementById('comparando').innerHTML=(num3 + " y " + num4 + " son iguales" );
    }
    else if(num3 > num4){
        document.getElementById('comparando').innerHTML=(num3 + " es mayor que " + num4 );
    }
    else{
        document.getElementById('comparando').innerHTML=(num3 + " es menor que " + num4 );
    }
}

//EJERCICIO 4
document.getElementById('calcula2').onclick=function contar(){
    var ninos = parseInt(document.getElementById('ninos').value);
    var ninas = parseInt(document.getElementById('ninas').value);

    console.log("Niños: "+ninos+" Niñas: "+ninas);

    var totalninos = ninos + ninas;
    var porcentninos = (ninos*100)/ totalninos;
    var porcentninas = (ninas*100)/ totalninos;

    document.getElementById('porcentaje').innerHTML=("Hay " +ninas+ " niñas y " + ninos+" niños<br>"+
        "El porcentaje de niñas es: " + porcentninas.toFixed(2) + "% y el porcentaje de niños es: " + porcentninos.toFixed(2) +"%");
}

//EJERCICIO 5
document.getElementById('calcula3').onclick=function descuento(){
    var importe= parseInt(document.getElementById('total').value);
    var mes= document.getElementById('mes').value;
    
    console.log("Total compra: " + importe+ "Mes compra: "+mes);
    if(mes.toLowerCase()=="octubre"){
        document.getElementById('compra').innerHTML="Total de tu compra: "+importe * 0.85+ "€"
    }
    else{
        document.getElementById('compra').innerHTML="Total de tu compra: "+importe+ "€"
    }
}

//EJERCICIO 12
function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}

//EJERCICIO CAMBIAR IMAGEN
function cambiar(){
    document.getElementById('hadas').src="media/imagen2.jpg";
  }
  function volver(){
    document.getElementById('hadas').src="media/imagen1.jpg";
  }