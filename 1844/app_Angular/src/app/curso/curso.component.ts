import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  /* this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
  <img src="{{img+1}}" alt="Imágenes de muestra"/> */
  public imagen:string

  constructor(){
    this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
  }

}
