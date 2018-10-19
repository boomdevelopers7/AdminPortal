import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerMaster } from '../../model/master/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerMasterService {
 
  dataList: Observable<CustomerMaster[]>;
  selectCustomer: CustomerMaster;
  constructor(private http: HttpClient) { }

  loadData(): Observable<CustomerMaster[]> {
    const url = "http://localhost:64597/api/customerMasters";
    this.dataList = this.http.get<CustomerMaster[]>(url);
    return this.http.get<CustomerMaster[]>(url);
  }
  postCustomerMaster(ft: CustomerMaster):
   Observable<CustomerMaster[]> {
    console.log(ft);
    const body: CustomerMaster = {
      custId: ft.custId,
      custName : ft.custName,
      cityId : ft.cityId,
      areaId : ft.areaId,
      societyId : ft.societyId,
      custMobNo1 : ft.custMobNo1,
      custMobNo2 : ft.custMobNo2,
      custGeoLocation : ft.custGeoLocation,

      flatId: ft.flatId,
      FlatMaster : ft.FlatMaster
      
   
    }
    return this.http.post<CustomerMaster[]>('http://localhost:64597/api/customerMasters', body);
  }
  getCustomerDataList(): Observable<CustomerMaster[]> {
    return this.http.get<CustomerMaster[]>('http://localhost:64597/api/customerMasters');
  }
  Delete(ft: CustomerMaster) {
    return this.http.delete<CustomerMaster[]>('http://localhost:64597/api/customerMasters/' + ft.custId);
  }
}

