import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UnitMasterService {

  constructor(private http: HttpClient ) {}
  loadData(){
    const url='http://localhost:64597/api/unitMaster';
    return this.http.get(url);
  }
}
