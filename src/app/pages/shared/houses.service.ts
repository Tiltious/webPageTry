import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http:HttpClient) { }
  getAllHouses(){
    return this.http.get('assets/postedhouses.json');
  }
}
