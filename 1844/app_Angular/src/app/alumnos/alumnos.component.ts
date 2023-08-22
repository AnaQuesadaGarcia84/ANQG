import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../modelos/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  public alumnosAll:Array<alumnosBD>

  constructor(){
    this.alumnosAll=[
      new alumnosBD("Miguel","Ramírez","miguel@gmail.com","624598763",true),
      new alumnosBD("Javier","Díaz","javier@gmail.com","624598763",false),
      new alumnosBD("Chris","Álida","cris@gmail.com","624598763",true),
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
