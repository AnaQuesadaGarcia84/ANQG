import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
// import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit {

  public archivos: any = []
  public loading: boolean | undefined

  constructor(private rest: FileService) { }

  ngOnInit(): void {
  }
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]  
    this.archivos.push(archivoCapturado)
  }
   
  // Subir archivo
  
  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string) => {
        formularioDeDatos.append('myfile', archivo)
      })
      this.rest.post(`http://localhost:3001/api/upload`, formularioDeDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);
        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }

}


 // constructor(private fileService: FileService) { }

  // getFile(event: Event){
  //   const target = event.target as HTMLInputElement;

  //   const files: FileList | null = target.files;

  //   if(files!.length > 0 && files != null){
  //     const formData = new FormData();

  //     Array.prototype.forEach.call(files, (file : File)=>{
  //       formData.append('files', file);
  //     })

  //     this.fileService.upload(formData).subscribe({
  //       next:(result : HttpResponse<FileList>) =>{
  //         console.log(result);
  //       },
  //       error:(err : HttpErrorResponse) =>{
  //         console.log(err);
  //       },
  //       complete: () =>{
  //         console.log('Se completó la tarea');
  //       }
  //     })
  //   }
  // }
