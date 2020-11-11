import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './component/employee/employee.service';
import { HttpClientModule} from '@angular/common/http';
import { Tap1Component } from './component/employee/tap1/tap1.component';
import { Tap2Component } from './component/employee/tap2/tap2.component';
import { Tap3Component } from './component/employee/tap3/tap3.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    routingModule,
    Tap1Component,
    Tap2Component,
    Tap3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
