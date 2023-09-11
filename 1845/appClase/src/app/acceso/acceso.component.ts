import { Component } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent {

  public email:String
  public pass:String

  constructor(){
    this.email=""
    this.pass=""
  }
}
