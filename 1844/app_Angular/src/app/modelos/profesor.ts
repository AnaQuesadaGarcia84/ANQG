// export var profesorBase={
//     nombre: "Manuel",
//     apellidos: "M.P.",
//     correo:"manuelmac@gmail.com",
//     foto:"./assets/media/hada1.png",
// }

export class profesoresBase{
    constructor(
        public nombreListP:String,
        public apellidosListP:String,
        public estadoListP:boolean,
    ){}
}

export class profesorBase{
    constructor(
        public nombreP:String,
        public apellidosP:String,
        public edadP:Number,
        public correoP:String,
        public telefonoP:String,
        public fotoP:String,
        public estadoP:boolean,
    ){}
}
