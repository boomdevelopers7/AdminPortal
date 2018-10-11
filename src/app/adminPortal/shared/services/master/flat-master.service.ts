import { Injectable } from '@angular/core';
import { FlatMaster } from '../../model/master/flat-master.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatMasterService {
 
  dataList: Observable<FlatMaster[]>;
  selectFlat: FlatMaster;
  constructor(private http: HttpClient) { }

  loadData(): Observable<FlatMaster[]> {
    const url = "http://localhost:64597/api/flatMasters";
    this.dataList = this.http.get<FlatMaster[]>(url);
    return this.http.get<FlatMaster[]>(url);
  }
  postflatMaster(ft: FlatMaster):
   Observable<FlatMaster[]> {
    console.log(ft);
    const body: FlatMaster = {
      flatId: ft.flatId,
      flatNo : ft.flatNo,
      societyId: ft.societyId,
      SocietyMaster : ft.SocietyMaster
      
   
    }
    return this.http.post<FlatMaster[]>('http://localhost:64597/api/flatMasters', body);
  }
  getFlatDataList(): Observable<FlatMaster[]> {
    return this.http.get<FlatMaster[]>('http://localhost:64597/api/flatMasters');
  }
  Delete(ft: FlatMaster) {
    return this.http.delete<FlatMaster[]>('http://localhost:64597/api/flatMasters/' + ft.flatId);
  }
}
