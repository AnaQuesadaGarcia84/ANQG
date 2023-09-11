import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_Angular';

  public popiedadesH1:any

  constructor(){

    //Objeto JSON para darle las porpiedades de estilo
    // this.popiedadesH1={
    //   color: '#0D3F7D',
    //   fontSize:'2.5em',
    //   textAlign:'center'
    // }
  }
}
