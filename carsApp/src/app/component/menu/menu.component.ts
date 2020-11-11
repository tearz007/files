import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'
import { Router, UrlSerializer } from '@angular/router'
import { conveter } from '../../services/classes/getter';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: any ={};
  cars = {};

  constructor(private carInfor: DataServiceService, private router: Router) { }

  ngOnInit(): void {
     this.carInfor.getInformation().subscribe(data => this.user = data);
  }
  getCars(id) {
    let obarry = { id:this.user.cars[id - 1].id,name: this.user.cars[id - 1].name,color: this.user.cars[id - 1].color}
    this.carInfor.setCarDetailes(obarry);
    this.carInfor.navigate();
  }
}
