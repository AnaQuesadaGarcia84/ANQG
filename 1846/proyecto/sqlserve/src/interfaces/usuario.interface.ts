import {AuthInterface} from "./auth.interface"

export interface UserInterface extends AuthInterface{
    nombre: string;
    apellidos: string;
    fNacimiento: string;
    // foto: string;
    telefono: string;
    tipo: string;
    // anotaciones: string;
}

