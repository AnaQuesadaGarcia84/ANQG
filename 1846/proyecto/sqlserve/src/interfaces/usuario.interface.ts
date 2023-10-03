import {AuthInterface} from "./auth.interface"

export interface UserInterface extends AuthInterface{
    nombre: string;
    apellidos: string;
    fNacimiento: string;
    foto: string;
    tipo: string;
    anotaciones: string;
}

