import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/libs/ui-login';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomeModule'},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
