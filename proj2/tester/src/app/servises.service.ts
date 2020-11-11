import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Get } from './httpprac/get'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServisesService {

  private path = 'assets/convet.json';
  constructor(private http:HttpClient) {}
  getInfo():Observable<Get[]>{
   return this.http.get<Get[]>(this.path);
  }
}
