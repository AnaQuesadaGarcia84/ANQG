import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { HeaderComponent } from './header/header.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component'
import { DashboardComponent } from './componentes/dashboard/dashboard.component'
import { LoginComponent } from './componentes/login/login.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { ArchivoComponent } from './componentes/archivo/archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarCursosComponent,
    CrearCursosComponent,
    HomeComponent,
    ContactoComponent,
    CursoComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SignInComponent,
    SpinnerComponent,
    ArchivoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
