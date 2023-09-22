import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioModel } from '../modelos/usuarioModelo';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: UsuarioModel[] = []

  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.obtenerUsuarios()
  }
  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listaUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarCurso(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El usuario fue eliminado con exito', 'Usuario Eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }

}
