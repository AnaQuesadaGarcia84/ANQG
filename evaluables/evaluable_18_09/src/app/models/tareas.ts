export class Tareas{
    public _id?: string
    public user: string
    public idTarea: string
    public descripcionTarea: string
    public puntuacion: number
    public estado: string

    constructor(user: string, idTarea: string, descripcionTarea: string, puntuacion:number, estado: string){
        this.user=user;
        this.idTarea=idTarea;
        this.descripcionTarea= descripcionTarea;
        this.puntuacion=puntuacion;
        this.estado=estado
    }
}



    // _id: String,
    //   user: String,
    //   idTarea: String,
    //   descripcionTarea: String,
    //   puntuacion: Number,
    //   estado: String