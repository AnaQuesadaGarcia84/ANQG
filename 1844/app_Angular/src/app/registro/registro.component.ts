import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  public nombre:String
  public apellidos:String
  public mail:String
  public password:String
  public password2:String
  public iniciado:boolean


  constructor(){
    this.nombre=""
    this.apellidos=""
    this.mail=""
    this.password=""
    this.password2=""
    this.iniciado=false
  }

  siIniciado(){
    this.iniciado=true
  }

  noIniciado(){
    this.iniciado=false
  }

  ngOnInit(){
    console.log("Está vivo!!!!")
  }
}
