import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PostModel } from 'src/app/models/post.model';


@Component({
  selector: 'app-crear-Post',
  templateUrl: './crear-Post.component.html',
  styleUrls: ['./crear-Post.component.css']
})
export class CrearPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService) { 
      this.postForm = this.fb.group({
        titulo: ['', Validators.required],
        contenido: ['', Validators.required],
        categoria: ['', Validators.required],
        fecha: [''],
        usuario: [''],
        imagen: [''],
      })
  }

  ngOnInit() {
  }

  agregarPost(){
    console.log(this.postForm.value);
    
    const POST: PostModel = {
      titulo: this.postForm.get('titulo')?.value,
      contenido: this.postForm.get('contenido')?.value,
      categoria: this.postForm.get('categoria')?.value,
      fecha: new Date().toLocaleString(),
      imagen: this.postForm.get('imagen')?.value,
      usuario: 'admin'
    }

    //Dejamos el formulario limpio
    this.postForm.reset();

    console.log(POST);
    this.toastr.success('El post se ha subido con éxito', 'Post subido');
    this.router.navigate(['/listar-post']);
  }

}
