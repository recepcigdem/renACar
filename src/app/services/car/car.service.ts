import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl ="https://localhost:44391/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getalldetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getalldetail?carId='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}