import { Injectable } from '@angular/core';
import { alumnoBD } from '../modelos/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnosall: Array<alumnoBD>

  constructor(){
    this.alumnosall = [
        new alumnoBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","./assets/media/fotommp.jpg", true), 
        new alumnoBD("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","./assets/media/fotommp.jpg", true), 
        new alumnoBD("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","./assets/media/fotommp.jpg", true)
    ]
  }

  getTexto(){
    return "Texto desde un servicio"
  }

  getAlumnos(): Array<alumnoBD>{
    return this.alumnosall
  }
}
