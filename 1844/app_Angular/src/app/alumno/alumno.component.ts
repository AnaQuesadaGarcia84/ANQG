import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  public imagen:string
  
  constructor(){
    this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
  }
}
