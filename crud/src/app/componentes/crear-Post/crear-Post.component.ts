import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-Post',
  templateUrl: './crear-Post.component.html',
  styleUrls: ['./crear-Post.component.css']
})
export class CrearPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.postForm = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      usuario: [''],
      fecha: [''],
      imagen: [''],
    })
  }

  ngOnInit() {
  }

  agregarPost(){
    console.log(this.postForm.value);
    this.postForm.reset();
  }

}
