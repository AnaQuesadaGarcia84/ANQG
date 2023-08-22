import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../modelos/alumnos';
import { alumnosBD } from '../modelos/alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{

  public alumnosAll:Array<alumnosBD>
  public nombreProfesor:string
  public apellidosProfesor:string
  public fotoProfesor:string
  public imagen:string
  public notaAlumno:number
  
  constructor(){
    this.alumnosAll=[
      new alumnosBD("Miguel","Ramírez", 39,"miguel@gmail.com","624598763","./assets/media/hada1.png",true),
      new alumnosBD("Javier","Díaz", 19,"javier@gmail.com","624598763","./assets/media/hada1.png",false),
      new alumnosBD("Cristofer","Melian", 22,"cris@gmail.com","624598763","./assets/media/hada1.png",true),
    ]

    this.notaAlumno=5
    this.nombreProfesor=profesorBase.nombre
    this.apellidosProfesor=profesorBase.apellidos
    this.fotoProfesor=profesorBase.foto
    this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
