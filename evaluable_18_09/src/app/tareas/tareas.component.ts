import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

//Servicio - Modelo
import { Tareas } from '../models/tareas';
import { TareasService } from '../service/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareasForm: FormGroup;
  id: string | null

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _tareasService: TareasService,
    private aRouter: ActivatedRoute) {

    this.tareasForm = this.fb.group({
      user: ['', Validators.required],
      idTarea: ['', Validators.required],
      descriptionTarea: ['', Validators.required],
      puntuacion: ['', Validators.required],
      estado: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }//Fin del constructor

  ngOnInit(): void {
    
  }

}
