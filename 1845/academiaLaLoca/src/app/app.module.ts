import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

//Mis componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CursosComponent } from './cursos/cursos.component';
import { MostrarCursosComponent } from './mostrar-cursos/mostrar-cursos.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';


@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    RegistroComponent,
    IniciarComponent,
    CursosComponent,
    MostrarCursosComponent,
    HomeComponent,
    CursoComponent,
    EditarCursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
