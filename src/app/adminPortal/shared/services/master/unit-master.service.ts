import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable} from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Unit } from '../../model/master/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  url="http://localhost:64597/api";
  dataList:Unit[];
selectUnit : Unit; 
  constructor(private http : HttpClient) { }
  loadData():Observable<Unit[]>{
    const url='http://localhost:64597/api/unitMaster';
    return this.http.get<Unit[]>(url);
    return this.http.get<Unit[]>(this.url+"/unitMaster");


  }
  postUnit(ut : Unit){
    const body: Unit={
      ID:ut.ID,
      unitId:ut.unitId,
      unitName : ut.unitName,
      unitDescription :ut.unitDescription,
          }
          return this.http.post('http://localhost:64597/api/unitMaster', body);
          return this.http.post(this.url+'/unitMaster', body);
        }


        
  getUnitDataList():Observable<Unit[]>{
    return this.http.get<Unit[]>('http://localhost:64597/api/unitMaster');
    return this.http.get<Unit[]>(this.url+'/unitMaster');
  }
}
