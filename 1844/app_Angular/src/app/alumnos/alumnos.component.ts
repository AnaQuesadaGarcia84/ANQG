import { Component, OnInit} from '@angular/core';
import { alumnoBD, alumnosBD } from '../modelos/alumnos';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers:[AlumnosService]
})
export class AlumnosComponent implements OnInit{

  public alumnosall:Array<alumnoBD>

  constructor(private _alumnosService: AlumnosService){
    this.alumnosall=new Array<alumnoBD>
  }
  ngOnInit(): void {
    this.alumnosall=this._alumnosService.getAlumnos();
  }

  

}
