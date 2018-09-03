import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Item } from '../../model/master/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private serviceUrl = "http://localhost:64597/api/ItemMaster";

  constructor(private http: HttpClient) { }
  getItem():Observable<Item[]>{
    return this.http.get<Item[]>(this.serviceUrl);
  }
}

