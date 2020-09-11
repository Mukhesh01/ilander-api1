import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MyservicService {
  headers=new HttpHeaders();

  constructor(private http:HttpClient) { }
  getCountries()
  {
    return this.http.get('http://iltcs.com/api/stc/get-countries');
  }
  addCountries(params)
  {
    this.headers.append("Content-Type","multipart/form-data");
   return this.http.post('http://iltcs.com/api/stc/add-country',params,{headers:this.headers});
  }
  deleteCountry(id)
  {
      this.headers.append("Content-Type","multipart/form-data");
      return this.http.post('http://iltcs.com/api/stc/delete-country',id,{headers:this.headers})
  }
  updateCountries(params)
  {
    this.headers.append("Content-Type","multipart/form-data");
   return this.http.post('http://iltcs.com/api/stc/update-country',params);
  }

}
