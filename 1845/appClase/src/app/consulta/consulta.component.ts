import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{
  

  contacto!:FormGroup;
  // submitted: false;
  title="Formulario de contacto"

  ngOnInit(): void {
    
  }
}
