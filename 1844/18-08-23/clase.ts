class Camiseta{
    //Propiedades (caracteristicas del objeto)
    private color: string
    private modelo: string
    private marca: string
    private talla: string
    private precio: string

    constructor(color:string,modelo:string,marca:string,talla:string,precio:string){
        this.color=color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    setColor(color){
        this.color=color
    }

    getColor(color){
        return this.color
    }
}


//Clase hija
class Sudadera extends Camiseta{
    public capucha:boolean

    constructor(color:string,modelo:string,marca:string,talla:string,precio:string){
        super(color, modelo,marca,precio,talla);
        this.capucha=true//Valor predeterminado
    }

    setCapucha(capucha:boolean){
        this.capucha=capucha
    }

    getCapucha():boolean{
        return this.capucha
    }
}

var camiseta= new Camiseta('Rojo','Manga corta','Una','L','30')
console.log(camiseta)
console.log('---------')
console.log(Camiseta)
console.log('')

var sudadera_una=new Sudadera('Rojo','Manga corta','Una','L','30')
sudadera_una.setCapucha(true)
console.log('---------')
console.log(sudadera_una)
// 