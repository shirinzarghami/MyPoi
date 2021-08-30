import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ShowEmployesComponent } from './show-employes/show-employes.component';

const routes: Routes = [
  { path: '', redirectTo: '/showEmployes', pathMatch: 'full' },
  { path: 'showEmployes', component: ShowEmployesComponent },
  { path: 'employeeForm', component: EmployeeFormComponent },
  { path: 'employeeForm/:id', component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }