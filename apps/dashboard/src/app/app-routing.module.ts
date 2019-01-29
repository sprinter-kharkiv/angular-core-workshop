import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/libs/ui-login';
import { ProjectsComponent } from './projects/projects.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomeModule'},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
