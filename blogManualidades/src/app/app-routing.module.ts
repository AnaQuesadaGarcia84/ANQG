import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './componentes/default/default.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PostsComponent } from './componentes/dashboard/posts/posts.component';

const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'posts', component: PostsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
