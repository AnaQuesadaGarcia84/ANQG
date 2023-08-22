export class alumnoBD{
    constructor(
        public nombreA:String,
        public apellidosA:String,
        public edadA:Number,
        public correoA:String,
        public telefonoA:String,
        public fotoA:String,
        public estadoA:boolean,
    ){}
}

export class alumnosBD{
    constructor(
        public nombreListA:String,
        public apellidosListA:String,
        public correoListA:String,
        public telefonoListA:String,
        public estadoListA:boolean, 
    ){}
}