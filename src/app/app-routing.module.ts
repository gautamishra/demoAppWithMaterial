import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerComponent } from './components/manager/manager.component';

const routes: Routes = [
  {path: '', redirectTo: '/employee-detail', pathMatch: 'full' },
  {
  path: 'employee-detail',
  component: EmployeeComponent
} , {
  path: 'manager/:id',
  component: ManagerComponent
}]
//  {
//   path: '**',
//   redirectTo: '/employee-detail',
//   pathMatch: 'full'
// }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
