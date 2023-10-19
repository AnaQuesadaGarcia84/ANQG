export class Post{
    _id?: string;
    titulo: string;
    contenido: string;
    fecha: Date;
    usuario: string;
    imagen?: string;

    constructor(titulo: string, contenido: string, fecha: Date, usuario: string, imagen?: string){
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;
        this.usuario = usuario;
        this.imagen = imagen;
    }
}