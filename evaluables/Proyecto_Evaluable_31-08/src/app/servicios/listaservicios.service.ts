import { Injectable } from '@angular/core';
import { ServiciosBD} from '../modelos/lstServicios'

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100", "Consultoría","Servicio de consultoría sobre arte", 60,"./assets/media/consulta.jpg", true), 
                new ServiciosBD("101", "Cursos de dibujo","Cursos de dibujos de distintos estilos según el profesor", 160,"./assets/media/clase.jpg", true), 
                new ServiciosBD("102", "De foto a Arte","De foto a ilustración de arte", 160,"./assets/media/fotoarte.png", true),
                new ServiciosBD("103", "Registro arte","Registra tu obra de arte", 100,"./assets/media/registro.jpg", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}
