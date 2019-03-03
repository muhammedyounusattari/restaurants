import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  urlEncoded='/assets/euro_restrobeee02c.csv';

  constructor(private http:HttpClient) {
    
    
    
  }
  getCSVData(){
    this.http.get(this.urlEncoded).subscribe(data => {
      console.log(data);
   })
   
  }
     getRestaurantData(){
       return this.http.get(this.urlEncoded, {responseType: 'text' as 'json'});
     }
}
