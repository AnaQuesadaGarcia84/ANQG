import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Elementos de angular material
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

//Mis componentes
import { DefaultComponent } from './componentes/default/default.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PostCreateComponent } from './componentes/dashboard/posts/post-create/post-create.component';
import { PostListComponent } from './componentes/dashboard/posts/post-list/post-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostCreateComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
