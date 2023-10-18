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
      descripcionTarea: ['', Validators.required],
      puntuacion: ['', Validators.required],
      estado: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }//Fin del constructor

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTarea(){
    const TAREA: Tareas = {
      user: this.tareasForm.get('user')?.value,
      idTarea: this.tareasForm.get('idTarea')?.value,
      descripcionTarea: this.tareasForm.get('descripcionTarea')?.value,
      puntuacion: this.tareasForm.get('puntuacion')?.value,
      estado: this.tareasForm.get('estado')?.value
    }

    if(this.id !== null){
      // Editamos Curso
      this._tareasService.editarTareas(this.id, TAREA).subscribe(data =>{
        this.toastr.info('La tarea fue actualizada con exito!', 'Tarea Actualizada!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareasForm.reset();
      })
    } else{
      // Agregamos Curso
      console.log(TAREA);
        this._tareasService.guardarTareas(TAREA).subscribe(data => {
        this.toastr.success('La tarea fue registrada con exito!', 'Tarea Registrada!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareasForm.reset();
      })
    }  

  }//Cierre agregar Tarea

  esEditar() {
    if(this.id !== null) {
      this._tareasService.obtenerTareas(this.id).subscribe(data => {
        this.tareasForm.setValue({
          user: data.user,
          idTarea: data.idTarea,
          descripcionTarea: data.descripcionTarea,
          puntuacion: data.puntuacion,
          estado: data.estado
        })
      })
    }
  }

}
