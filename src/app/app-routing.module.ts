import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/showEmployees', pathMatch: 'full' },
  { path: 'showEmployees', component: ShowEmployeeComponent},
  { path: 'registerEmployee', component: RegisterEmployeeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }