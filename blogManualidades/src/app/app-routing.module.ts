import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './componentes/default/default.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PostCreateComponent } from './componentes/dashboard/posts/post-create/post-create.component';


const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'posts', component: PostCreateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
