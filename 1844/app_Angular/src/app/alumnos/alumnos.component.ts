import { Component} from '@angular/core';
import { alumnosBD } from '../modelos/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  public alumnosAll:Array<alumnosBD>

  constructor(){
    this.alumnosAll=[
      new alumnosBD("Miguel","Ramírez","miguel@gmail.com","624598763",true),
      new alumnosBD("Javierror","Díaz","javier@gmail.com","624598763",false),
      new alumnosBD("Chris","Álida","cris@gmail.com","624598763",true),
    ]
  }

  

}
