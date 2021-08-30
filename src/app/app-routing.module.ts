import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ShowEmployesComponent } from './show-employes/show-employes.component';

const routes: Routes = [
  { path: '', redirectTo: '/showEmployes', pathMatch: 'full' },
  { path: 'showEmployes', component: ShowEmployesComponent},
  { path: 'registerEmployee', component: RegisterEmployeeComponent},
  { path: 'registerEmployee/:id', component: RegisterEmployeeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }