document.getElementById('comprueba').onclick=function operaciones(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var suma= num1+num2;
    var resta= num1-num2;
    var multiplica=num1*num2;
    var divide=num1/num2;

    document.getElementById('operandos').innerHTML= 'Primer número: '+num1+ ' Segundo número: '+num2;
    document.getElementById('suma').innerHTML='El resultado al sumarlos es: '+suma + '<br>';
    document.getElementById('suma').innerHTML='El resultado al restarlos es: '+resta+ '<br>';
    document.getElementById('suma').innerHTML='El resultado al multiplicarlos es: '+multiplica+ '<br>';
    document.getElementById('suma').innerHTML='El resultado al dividirlos es: '+divide+ '<br>';    
}

operaciones();