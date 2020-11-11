import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { conveter } from './classes/getter';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private fireB: AngularFirestore) { }

  /*  firebase  */
  creatCars(car) {
    this.fireB.collection('car').add(car).then(() => {
      alert("working");
    }).catch(err => {
      alert(err.message + " " + "unsuccussful");
    });
  }


  /*  firebase end */

  //private url ="./../assets/data.json"
  private url = 'https://tearz007.github.io/carsDb/data.json';
  // private url ='carsDb/data.json'
  user = [];
  getInformation(): Observable<conveter[]> {
    return this.http.get<conveter[]>(this.url);
  }

  navigate() {
    return this.router.navigate(['/car_details']);
  }

  deleteCar(id) {
    let _url = `${this.url}/${id}`;
    return this.http.delete<conveter[]>(_url, this.httpOptions)
  }

  setCarDetailes(_object) {
    let ppl = _object;
    this.user = [ppl]
  }

}
// private url ="https://my-json-server.typicode.com/tearz007/cars.jsom";
