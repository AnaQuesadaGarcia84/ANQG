import {Auth} from "./auth.interface"

export interface UserInterface extends Auth{
    nombre: string;
    apellidos: string;
    fNacimiento: string;
    foto: string;
    tipo: string;
    anotaciones: string;
}

