var importe= parseInt(prompt("Introduce el total de tu compra:"));
var mes= prompt("Introduce el mes de tu compra: ");

function descuento(){
    if(mes.toLowerCase()=="octubre"){
        console.log("Total de tu compra: "+importe * 0.85+ "€");
        document.write("Total de tu compra: "+importe * 0.85+ "€");
    }
    else{
        console.log("Total de tu compra: "+importe + "€");
        document.write("Total de tu compra: "+importe + "€")
    }
}

descuento();