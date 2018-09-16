import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemMaster } from '../../model/master/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemMasterService {
  constructor(private http: HttpClient) { }
  getItemMaster(): Observable<ItemMaster[]>{
  const serviceUrl = "http://localhost:64597/api/ItemMaster";
    return this.http.get<ItemMaster[]>(serviceUrl);
  }
}