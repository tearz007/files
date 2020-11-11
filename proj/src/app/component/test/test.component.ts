import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
 export class TestComponent implements OnInit {

  public name = "The Eager";
  public surname ="Moshabane";
  public userName;
  public password;
  public date = new Date();

  public employee = [];
  constructor(private deta: EmployeeService) { }

  ngOnInit(): void {
    this.deta.getemployee()
      .subscribe(data => this.employee = data);
  }

  onClicked(userNm,password){
    this.userName=userNm;
    this.password=password;
    console.log("username is:"+this.userName +" password is:"+ this.password );
  }



}
