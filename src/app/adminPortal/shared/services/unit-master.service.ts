import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Unit } from '../model/master/unit.model';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class UnitMasterService {
  
  constructor(private http: HttpClient ) {}
  loadData():Observable<Unit[]>{
    const url='http://localhost:64597/api/unitMaster';
    return this.http.get<Unit[]>(url);


  }
}  