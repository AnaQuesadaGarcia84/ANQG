export class UsuarioModel{
    public _id?: string
    public nombre: string
    public apellidos: string
    public fNacimiento: string
    public email: string
    public telefono: string
    public foto: string
    public password: string
    public tipo: boolean
    public fechaRegistro: string
    public anotaciones: string
    constructor(nombre:string, apellidos: string, fNacimiento:string, email:string, telefono:string, foto:string, password:string, tipo:boolean, fechaRegistro:string, anotaciones:string){
        this.nombre= nombre;
        this.apellidos= apellidos;
        this.fNacimiento = fNacimiento;
        this.email = email;
        this.telefono = telefono;
        this.foto = foto;
        this.password = password;
        this.tipo = tipo;
        this.fechaRegistro = fechaRegistro;
        this.anotaciones = anotaciones;
    }    
}