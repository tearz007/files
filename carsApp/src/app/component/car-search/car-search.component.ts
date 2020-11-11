import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'



@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {
  names = "";
  user: any = {}
  valid=true
  constructor(private infor: DataServiceService) { }

  ngOnInit(): void {
    this.infor.getInformation().subscribe(data => this.user = data);

  }


  searchName(name) {
    for (let index = 0; index < this.user.cars.length; index++) {
      if (name == this.user.cars[index].name) {
        console.log("in if");
        this.names = name;

        break
      }
      if (name != this.user.cars[index].name) {
        this.names = "";
        console.log("in else");
      }
    }
  }


}
