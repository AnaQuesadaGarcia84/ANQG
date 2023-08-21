//Programación Orientada a Objetos
class Ropa{
    //Propiedades
    public color: String;
    public marca: String;
    public talla: String;
    public precio: Number;

    //Método
    public setColor(color){
        this.color=color
    }

    public getColor(){
        return this.color
    }
}

var camiseta= new Ropa();
camiseta.setColor('Rojo');

