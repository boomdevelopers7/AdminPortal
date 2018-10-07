import { Injectable } from '@angular/core';
import { Customer } from '../../model/master/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  dataList: Observable<Customer[]>;
  selectCustomer: Customer;
  constructor(private http: HttpClient) { }
  loadData(): Observable<Customer[]> {
    const url = "http://localhost:64597/api/customers";
    this.dataList = this.http.get<Customer[]>(url);
    return this.http.get<Customer[]>(url);
  }
  postICustomer(cust: Customer):
   Observable<Customer[]> {
    console.log(cust);
    const body: Customer = {
      custId: cust.custId,
      custName: cust.custName,
      custCity: cust.custCity,
      custArea: cust.custArea,
      custSociety: cust.custSociety,
      custMobNo1: cust.custMobNo1,
      custMobNo2:cust.custMobNo2,
      flatId: cust.flatId,
      flat: cust.flat
    }
    return this.http.post<Customer[]>('http://localhost:64597/api/customers', body);
  }
  getCustomerDataList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:64597/api/customers');
  }
  Delete(cust: Customer) {
    return this.http.delete<Customer[]>('http://localhost:64597/api/customers/' + cust.custId);
  }
}
