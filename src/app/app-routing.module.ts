import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListusersComponent } from './listeusers/listeusers.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path : 'register', component:RegisterComponent},
  {path : 'login' , component:LoginComponent},
  {path : 'listusers' , component:ListusersComponent},
  {path : 'users/update/:id' , component:UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
