import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuariosModel';
import { Save_UsuarioService } from '../servicios/save_Usuario.service';
import { UploadService } from '../servicios/upload';
import { Global } from '../servicios/global';


@Component({
  selector: 'app-crearUsuario',
  templateUrl: './crearUsuario.component.html',
  styleUrls: ['./crearUsuario.component.css'],
  providers: [Save_UsuarioService, UploadService]
})
export class CrearUsuarioComponent implements OnInit {

  public title: string;
	public usuario: Usuario;
	public save_usuario: any;
	public status: any;
	public filesToUpload: Array<File> = [];

	constructor(
		private _usuarioService: Save_UsuarioService,
		private _uploadService: UploadService
	) {
		this.title = "Crear Usuario";
		this.usuario = new Usuario('', '', '', '', '', '', '', '', false, '', '');
	}

	ngOnInit() {
	}

	onSubmit(form: { reset: () => void; }) {

		// Guardar datos básicos
		this._usuarioService.saveUsuario(this.usuario).subscribe(
			response => {
				if (response.usuario) {

					// Subir la imagen
					if (this.filesToUpload) {
						this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.usuario._id, [], this.filesToUpload, 'image')
							.then((result: any) => {

								this.save_usuario = result.usuario;

								this.status = 'success';
								form.reset();
							});
					} else {
						this.save_usuario = response.usuario;
						this.status = 'success';
						form.reset();
					}

				} else {
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
