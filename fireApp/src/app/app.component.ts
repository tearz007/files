import { Component } from '@angular/core';
import { Model } from './model/mode'


import { ServiseService } from './servise/servise.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employee = {} as Model;
  emplyCollection=[];
  key?: string;
  name: string;
  age: number;
  address: string;

  constructor(private servise: ServiseService) { }

  title = 'fireApp';

  addEmployee() {

    let addfe = { name: this.employee.name, age: this.employee.age, address: this.employee.address }
    this.servise.Create_emp(addfe);
  }

  getEmployee() {

    this.servise.get_emp().subscribe(data => {
     this.emplyCollection=[];
      data.forEach(e => {

        const key=e.payload.doc.id;
        let value = e.payload.doc.data() as Model ;

        this.emplyCollection.push({key:key, name:value.name, age:value.age, address:value.address})

      })
    })
  }

  deleteEmployee(id) {

    this.servise.delete_emp(id);

  }

  updateEmployee(employee) {

    this.servise.updata_emp(employee);

  }

}
