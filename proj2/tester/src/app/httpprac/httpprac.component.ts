import { Component, OnInit } from '@angular/core';
import { ServisesService } from '../servises.service'

@Component({
  selector: 'app-httpprac',
  templateUrl: './httpprac.component.html',
  styleUrls: ['./httpprac.component.scss']
})
export class HttppracComponent implements OnInit {

  public person=[];
  constructor(private infor:ServisesService) { }

  ngOnInit(): void {
    this.infor.getInfo()
    .subscribe(data => this.person = data);
  }

}
