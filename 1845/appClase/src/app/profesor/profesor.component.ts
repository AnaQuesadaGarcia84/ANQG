import { Component } from '@angular/core';
import { profesorBase } from '../modelos/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
   public  profesor:Array<profesorBase>
  
  constructor(){
    this.profesor=[
      new profesorBase("Julián","Rodríguez",45,"julian@gmail.com","652301478", "./assets/media/hada1.png"),
      new profesorBase("Manuel","Macías",50,"manuel@gmail.com","652301478", "./assets/media/hada2.png"),
    ]
  }
}
