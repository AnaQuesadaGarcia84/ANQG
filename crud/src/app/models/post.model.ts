export class PostModel{
    _id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    fecha?: string;
    usuario: string;
    imagen?: string;

    constructor(titulo: string, contenido: string, categoria:string, fecha: string, usuario: string, imagen?: string){
        this.titulo = titulo;
        this.contenido = contenido;
        this.categoria = categoria;
        this.fecha = fecha;
        this.usuario = usuario;
        this.imagen = imagen;
    }
}