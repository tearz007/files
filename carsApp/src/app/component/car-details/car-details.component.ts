import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carInfor: DataServiceService) { }
  arry=[];

  ngOnInit(): void {
    console.log(this.arry = this.carInfor.user);
  }
}
