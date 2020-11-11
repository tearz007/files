import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { TestComponent } from './component/test/test.component';
import { Tap1Component } from './component/employee/tap1/tap1.component';
import { Tap2Component } from './component/employee/tap2/tap2.component';
import { Tap3Component } from './component/employee/tap3/tap3.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent  },
  { path: '', component: TestComponent},
  { path: 'test', component: TestComponent },
  { path: 'employee/tap1', component: Tap1Component },
  { path: 'tap2', component: Tap2Component },
  { path: 'tap3', component: Tap3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [EmployeeComponent, TestComponent]
