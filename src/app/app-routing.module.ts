import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserHomeComponent} from './userhome/userhome.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  