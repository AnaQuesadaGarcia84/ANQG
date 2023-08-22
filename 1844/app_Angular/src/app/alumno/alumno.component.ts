import { Component, OnInit } from '@angular/core';
import { alumnoBD } from '../modelos/alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{

  public alumno:Array<alumnoBD>
  public imagen:string
  public notaAlumno:number
  
  constructor(){
    this.alumno=[
      new alumnoBD("Miguel","Ramírez", 39,"miguel@gmail.com","624598763","./assets/media/hada1.png",true),
      new alumnoBD("Javierror","Díaz", 19,"javier@gmail.com","624598763","./assets/media/hada2.png",false),
      new alumnoBD("Chris","Álida", 22,"cris@gmail.com","624598763","./assets/media/hada3.png",true),
    ]

    this.notaAlumno=5
    
    this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
