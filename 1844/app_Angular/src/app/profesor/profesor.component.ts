import { Component } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  public imagen:string
  
  constructor(){
    this.imagen = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
  }
}
