import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'login', 
    component: LoginComponent, 
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
