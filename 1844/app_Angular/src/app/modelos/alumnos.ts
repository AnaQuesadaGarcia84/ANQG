export var profesorBase={
    nombre: "Manuel",
    apellidos: "M.P.",
    correo:"manuelmac@gmail.com",
    foto:"./assets/media/hada1.png"
}

export class alumnosBD{
    constructor(
        public nombreA:String,
        public apellidosA:String,
        public edadA:Number,
        public correoA:String,
        public telefonoA:String,
        public nfotoA:String,
        public estadoA:boolean,
    ){}
}