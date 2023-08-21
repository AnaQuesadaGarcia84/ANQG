import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  public nombre:string
  public listado:string

  constructor(){
    this.nombre="Programación"
    this.listado="Listado de Cursos"
  }

  //Método para que cargue al iniciar
  ngOnInit(){
    console.log("OnInit")
  }

  //Función
  cambiarTitulo(){
    this.nombre="Programación en Angular"
  }
}
