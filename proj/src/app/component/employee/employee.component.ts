import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employee=[];
  public car;
  constructor(private deta :EmployeeService) { }

  ngOnInit(): void {
    this.deta.getemployee()
    .subscribe((data) => this.employee = data);
    this.car = this.deta.getcar();
  }


}
