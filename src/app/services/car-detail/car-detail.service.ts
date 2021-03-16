import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { ItemResponseModel } from 'src/app/models/ItemResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44391/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetail(carId: Number): Observable<ItemResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getalldetailbycar?carId=' + carId;
    return this.httpClient.get<ItemResponseModel<CarDetail>>(newPath);
  }
}
