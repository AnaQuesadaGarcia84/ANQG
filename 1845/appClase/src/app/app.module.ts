import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from '@auth0/auth0-angular';

// Components
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { HeaderComponent } from './header/header.component';
import { TareasComponent } from './tareas/tareas.component';
import { FooterComponent } from './footer/footer.component';

//CDK
import {DragDropModule} from '@angular/cdk/drag-drop';

//MATERIAL
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesorComponent,
    ProfesoresComponent,
    AccesoComponent,
    RegistroComponent,
    ContactoComponent,
    CrearCursoComponent,
    ListarCursoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      domain: 'estadistica.auth0.com',
      clientId: 'knBYg5PAoX8zjj7uG9ShFEMQuqtAUGAQ'}),
    DragDropModule,
    TareasComponent,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
