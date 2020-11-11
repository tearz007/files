import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  user: any = {};
  constructor(private carInfor: DataServiceService) { }


  ngOnInit(): void {
    this.carInfor.getInformation().subscribe(data => this.user = data);
  }

  getCars(id) {
    let obarry = { id: this.user.cars[id - 1].id, name: this.user.cars[id - 1].name, color: this.user.cars[id - 1].color }
    this.carInfor.setCarDetailes(obarry);
    this.carInfor.setCarDetailes(obarry);
    this.carInfor.navigate();
  }
  delete(id) {
    /*for (let index = 0; index < this.user.cars.length; index++) {
      if ((id) == this.user.cars[index].id) {
        console.log("clicked "+id);
        console.log(this.user.cars[index].id);
        this.user.cars.splice(index,1);
        //console.log(" clicked id : " + (id-1) + " id : "+this.user.cars[index].id);
      }
    }*/
    this.carInfor.deleteCar(id).subscribe();
  }


}
