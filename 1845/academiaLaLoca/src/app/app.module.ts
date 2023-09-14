import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Mis componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

//Angular
import {MatInputModule} from '@angular/material/input';
import { RegistroComponent } from './registro/registro.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { MostrarCursosComponent } from './mostrar-cursos/mostrar-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    RegistroComponent,
    IniciarComponent,
    CursosComponent,
    ListaCursosComponent,
    MostrarCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
