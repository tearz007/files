import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { convet } from '../../conveter';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url: string = '../assets/Data/eploye.json';

  constructor(private http:HttpClient) { }

  getemployee(): Observable<convet[]>{
    return this.http.get<convet[]>(this.url);
  }


    car={
      brant:['bmt','fsd','bens'],
      clolor:["blue",'orange','red'],
      door:[2,5,6]
    }
    //hair=['','',]
    getcar(){
      return this.car;
    }


}
