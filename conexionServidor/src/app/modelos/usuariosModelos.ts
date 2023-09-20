export class Usuarios {
    public _id?: string
    public nombre: string
    public apellidos: string
    public fechaNacimiento: string
    public email: string
    public telefono: string
    public foto: string
    public password: string
    public alumno: boolean
    constructor(nombre:string, apellidos:string, fechaNacimiento:string, email:string,telefono:string, foto:string, password:string, alumno:boolean) {
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.fechaNacimiento = fechaNacimiento,
        this.email = email,
        this.telefono = telefono,
        this.foto = foto,
        this.password = password,
        this.alumno= alumno
    }
}