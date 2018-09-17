import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable} from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { unitMaster } from '../../model/master/unit.model';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  dataList:unitMaster[];
selectUnit : unitMaster; 
  constructor(private http : HttpClient) { }
  loadData():Observable<unitMaster[]>{
    const url='http://localhost:64597/api/unitMaster';
    return this.http.get<unitMaster[]>(url);


  }
  postUnit(ut : unitMaster){
    console.log(ut);
    const body: unitMaster={
      unitId:ut.unitId,
      unitName : ut.unitName,
      unitDescription :ut.unitDescription,
          }
          return this.http.post('http://localhost:64597/api/unitMaster', body);
        }

  getUnitDataList():Observable<unitMaster[]>{
    return this.http.get<unitMaster[]>('http://localhost:64597/api/unitMaster');
  }
}
